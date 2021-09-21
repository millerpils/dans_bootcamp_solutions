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

// callback strategy
describe('asynchronous promise testing', () => {
  // data stub
  data = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };

  // mock response object (models what fetch would return)
  const response = {
    status: 200,
    json: function () {
      return new Promise((resolve, reject) => {
        resolve(data);
      });
    },
  };

  // mock jest function
  const fetch = jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  });

  test('it should return a promise with a response object', () => {
    return fetch().then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  test('it should call json function return the json', () => {
    return fetch()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        expect(json.title).toBe('delectus aut autem');
      });
  });
});
