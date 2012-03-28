String.prototype.isPalindrome = function() {
  var word = this,
      reverse = word.split('').reverse().join('');
  return (word == reverse);
};

Palindrome = function(){
  this.a = 0;
  this.b = 0;
  this.method = '';
};

Palindrome.prototype.from = function(method) {
  this.method = method;

  return this;
};
Palindrome.prototype.ofDigits = function(digits) {
  var higherNumber = Math.pow(10, digits) - 1;

  this.a = higherNumber;
  this.b = higherNumber;

  return this;
};
Palindrome.prototype.result = function() {
  var palindrome = 0;

  for (var a = this.a; a > 0; a--) {
    for (var b = this.b; (a * b) > palindrome; b--) {
      var multiple = (a * b).toString();
      if(multiple.isPalindrome()){
        palindrome = parseInt(multiple, 10);
      }
    }
  }

  return palindrome;
};