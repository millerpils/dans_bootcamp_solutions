const Bag = require('./bag');

describe('bag', () => {
  test('a bag should be an instance of bag', () => {
    const b = new Bag(100);
    expect(b).toBeInstanceOf(Bag);
  });

  test('Bag class should throw error if no weight provided', () => {
    expect(() => new Bag()).toThrowError('Bag must have a weight!');
  });
});
