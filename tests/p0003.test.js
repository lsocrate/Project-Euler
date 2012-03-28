require('../problems/p0003');
module.exports = {
  'test example': function(beforeExit, assert) {
    var number = 13195;

    assert.eql([5, 7, 13, 29], number.factors());
  },
  'test problem': function(beforeExit, assert) {
    var number = 600851475143,
        factors = number.factors(),
        largestFactor = factors[factors.length - 1];

    assert.equal(6857, largestFactor);
  }
};
