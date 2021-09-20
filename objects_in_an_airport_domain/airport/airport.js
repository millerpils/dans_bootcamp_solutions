class Airport {
  static airports = [];

  constructor(name) {
    this.name = name;
    this.planes = [];
    this.constructor.airports.push(this);
  }

  static getAllAirports() {
    return Airport.airports;
  }
}

module.exports = Airport;
