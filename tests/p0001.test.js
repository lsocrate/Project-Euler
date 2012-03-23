require('../problems/p0001');
module.exports = {
  'test example': function(beforeExit, assert) {
    var result = new SumNumbers().below(10).thatAreMultiplesOf([3,5]).getResult();

    assert.equal(result, 23);
  }
};