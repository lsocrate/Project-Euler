require('../problems/p0002');
module.exports = {
  'test example': function(beforeExit, assert) {
    var result = new Fibonacci().first(10);

    assert.eql([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], result);
  },
  'test until': function(beforeExit, assert) {
    var result = new Fibonacci().until(90);

    assert.eql([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], result);
  },
  'test problem': function(beforeExit, assert) {
    var result = sum(new Fibonacci().until(4000000), 'even');

    assert.equal(4613732, result);
  }
};
