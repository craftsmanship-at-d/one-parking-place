var proxyquire = require('proxyquire'),
  assert = require('assert'),
  datastoreStub = {};

var datastoreFacade = proxyquire('./datastoreFacade', {
  '@google-cloud/datastore': datastoreStub
});

datastoreStub.createQuery = function() {
  return {};
};
datastoreStub.runQuery = function() {
  return new Promise(resolve => [[]]);
};

describe('Email Settings', function() {
  it('should be queried', async function() {
      const settings = await datastoreFacade.queryEmailSettings();
      settings.should.eventually.equal("foo");
  });
});

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
