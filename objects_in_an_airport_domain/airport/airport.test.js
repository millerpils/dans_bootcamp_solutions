const Airport = require('./airport');

describe('airport', () => {
  test('a bag should be an instance of an airport', () => {
    const a = new Airport('LAX');
    expect(a).toBeInstanceOf(Airport);
  });

  test('it should print the static airport property', () => {
    expect(Airport.getAllAirports()).toHaveLength(1);
  });
});
