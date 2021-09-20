const Bag = require('../bag/bag');
const Person = require('../person/person');

class Passenger extends Person {
  constructor(name, passportNumber, seatNumber) {
    super(name);
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
    this.bags = [];
  }

  addBag(weight) {
    const bag = new Bag(weight);
    this.bags.push(bag);
  }
}

module.exports = Passenger;
