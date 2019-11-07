var datastoreFacade = require('./datastoreFacade');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

describe('Authorization', function() {
  before(function() {
    datastoreFacade.createQuery = function(args) {
      console.log(args);
      return {
        props: [],
        filter: (k, v) => {
          console.log(k, v);
          props.push({ k: v });
        }
      };
    };

    datastoreFacade.runQuery = function() {
      return Promise.resolve([[{ authorizations: 'authorizations' }]]);
    };
  });

  it('should be queried', async function() {
    debugger;
    const authorizations = datastoreFacade.queryAuthorization('a', 'b');

    authorizations.should.eventually.eql({ authorizations: 'authorizations' });
  });

  it('should be saved', async function() {});
});
