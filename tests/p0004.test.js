require('../problems/p0004');
module.exports = {
  'test palindrome': function(beforeExit, assert) {
    assert.equal(true, 'ovo'.isPalindrome());
  },
  'test example': function(beforeExit, assert) {
    var result = new Palindrome().from('product').ofDigits(2).result();

    assert.equal(9009, result);
  },
  'test problem': function(beforeExit, assert) {
    var result = new Palindrome().from('product').ofDigits(3).result();

    assert.equal(906609, result);
  }
};
