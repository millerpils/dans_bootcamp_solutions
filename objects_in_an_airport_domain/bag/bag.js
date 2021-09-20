class Bag {
  constructor(weight) {
    if (!weight) {
      throw new Error('Bag must have a weight!');
    }

    this.weight = weight;
  }
}

module.exports = Bag;
