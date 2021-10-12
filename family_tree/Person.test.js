const Person = require('./Person');

describe('Person', () => {
  beforeAll(() => {
    p1 = new Person('Queen Elizabeth II', ['Queen Mother', 'King George IV']);
    p2 = new Person('Prince Philip', ['Queen Mother', 'King George IV']);
    p3 = new Person('Prince Charles', p2.parents);
  });

  test('should be able to create an object of type person', () => {
    expect(p1).toBeInstanceOf(Person);
  });

  test('childOf should return a string', () => {
    expect(typeof p1.childOf()).toBe('string');
  });
});
