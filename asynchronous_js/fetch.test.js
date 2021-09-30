// promise & async/await strategy

// mocking fetch as it's a nag to run in Jest

const { expect } = require('@jest/globals');

describe('fetch promise testing', () => {
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

  test('it should call json function which returns a promise that resolves to some json', () => {
    return fetch()
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        expect(json.title).toBe('delectus aut autem');
      });
  });

  test('it should call fetch but this time using async/await to return the data', async () => {
    const response = await fetch();
    const json = await response.json();

    expect(json.title).toBe('delectus aut autem');
  });
});
