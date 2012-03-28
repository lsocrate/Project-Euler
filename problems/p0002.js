var util = require('util');

sum = function(numbers, type) {
  var result = 0;

  for (var i = 0; i < numbers.length; i++) {
    switch(type){
      case 'even':
        if(numbers[i] % 2 === 0){
          result += numbers[i];
        }
        break;
      case 'odd':
        if(numbers[i] % 2 === 1){
          result += numbers[i];
        }
        break;
      default:
        result += numbers[i];
    }
  }

  return result;
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

Fibonacci = function(){
  this.previous = 0;
  this.actual   = 1;
  this.sequence = [];
};

Fibonacci.prototype.getNextNumber = function() {
  var next = this.previous + this.actual;

  this.previous = this.actual;
  this.actual = next;

  return next;
};

Fibonacci.prototype.first = function(qty) {
  qty = parseInt(qty, 10);

  while(this.sequence.length < qty){
    this.sequence.push(this.getNextNumber());
  }

  return this.sequence;
};
Fibonacci.prototype.until = function(limit) {
  limit = parseInt(limit, 10);

  this.sequence.push(this.getNextNumber());

  while(this.sequence.last() < limit){
    this.sequence.push(this.getNextNumber());
  }

  this.sequence.pop();

  return this.sequence;
};