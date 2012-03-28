Number.prototype.factors = function() {
  var factors = [],
      current = this;

  for (var i = 2; i <= current; i++) {
    if(current % i === 0){
      if(factors.indexOf(i) === -1){
        factors.push(i);
      }

      current = current / i;
      i--;
    }
  }

  return factors;
};