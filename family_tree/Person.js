class Person {
  constructor(name, parents) {
    this.name = name;
    this.parents = parents;
  }

  childOf() {
    return `${this.name}'s parents are: ${this.parents[0]} and ${this.parents[1]}`;
  }
}

module.exports = Person;
