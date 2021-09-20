const { test, expect } = require('@jest/globals');
const {
  secondGeneration,
  thirdGeneration,
  childOfHelper,
} = require('./familyTree');

describe('family tree', () => {
  test('childofHelper should return a string', () => {
    expect(typeof childOfHelper(['Queen Mother', 'King George IV'])).toBe(
      'string'
    );
  });

  test('given the second gen, parents should be', () => {
    expect(secondGeneration[0].childOf()).toBe('Queen Mother & King George IV');
  });

  test('given the third gen, parents should be', () => {
    expect(thirdGeneration[0].childOf()).toBe(
      'Queen Elizabeth II & Prince Philip'
    );
  });
});
