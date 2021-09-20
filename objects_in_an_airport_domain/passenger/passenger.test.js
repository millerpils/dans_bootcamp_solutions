const Passenger = require('./passenger');
const Person = require('../person/person');

describe('passenger', () => {
  const passenger = new Passenger('Daniel Miller', 123456678, '21');

  test('a passenger should also be an instance of a person', () => {
    expect(passenger).toBeInstanceOf(Person);
  });

  test('super name and getName should return the name', () => {
    expect(passenger.getName()).toEqual('Daniel Miller');
  });

  test('a passenger should be able to add a bag', () => {
    passenger.addBag(200);
    expect(passenger.bags).toHaveLength(1);
    console.log(passenger.bags[0].weight);
  });
});
