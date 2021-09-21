// require = CommonJS
const { expect } = require('@jest/globals');
const timeout = require('./timeout');

// callback strategy
describe('asynchronous callback testing', () => {
  test('it should return some data using a callback', (done) => {
    function callback(data) {
      try {
        expect(data).toBe('done');
        done();
      } catch (error) {
        done(error);
      }
    }

    timeout(callback);
  });
});
