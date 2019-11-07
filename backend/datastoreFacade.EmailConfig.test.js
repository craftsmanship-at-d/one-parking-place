var datastoreFacade = require('./datastoreFacade');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

describe('EmailConfig', function() {
  before(function() {
    datastoreFacade.createQuery = function() {
      return {};
    };
    datastoreFacade.runQuery = function() {
      return Promise.resolve([[{ someEmailSettings: 'aabbcc' }]]);
    };
  });

  it('should be queried', function() {
    const settings = datastoreFacade.queryEmailSettings();

    settings.should.eventually.eql({ someEmailSettings: 'aabbcc' });
  });
});


