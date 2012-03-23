var util = require('util');

Number.prototype.divisibleBy = function(numbers) {
  if(!util.isArray(numbers)){
    numbers = [numbers];
  }

  for (var i = 0; i < numbers.length; i++) {
    if(this % numbers[i] === 0){
      return true;
    }
  }

  return false;
};

SumNumbers = function(){
  this.threshold = 0;
  this.multiplesOf = [];
};

SumNumbers.prototype.below = function(threshold) {
  this.threshold = parseInt(threshold, 10);

  return this;
};
SumNumbers.prototype.thatAreMultiplesOf = function(multiples) {
  this.multiplesOf = multiples;

  return this;
};
SumNumbers.prototype.getResult = function() {
  var sum = 0;

  for (var i = 1; i < this.threshold; i++) {
    if(i.divisibleBy(this.multiplesOf)){
      sum += i;
    }
  }

  return sum;
};