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

Fibonacci = function(){
  this.sequence = [1,2];
};

Fibonacci.prototype.previous = function() {
  return this.sequence[this.sequence.length - 2];
};
Fibonacci.prototype.actual = function() {
  return this.sequence[this.sequence.length - 1];
};
Fibonacci.prototype.setNextNumber = function() {
  this.sequence.push(this.previous() + this.actual());
};

Fibonacci.prototype.first = function(qty) {
  qty = parseInt(qty, 10);

  while(this.sequence.length < qty){
    this.setNextNumber();
  }

  return this.sequence;
};
Fibonacci.prototype.until = function(limit) {
  limit = parseInt(limit, 10);

  while(this.sequence.last() < limit){
    this.setNextNumber();
  }

  this.sequence.pop();

  return this.sequence;
};