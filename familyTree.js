const secondGeneration = [
  {
    name: 'Queen Elizabeth II',
    parents: ['Queen Mother', 'King George IV'],
    childOf: function () {
      return childOfHelper(this.parents);
    },
  },
  {
    name: 'Prince Philip',
    parents: ['Queen Mother', 'King George IV'],
    childOf: function () {
      return childOfHelper(this.parents);
    },
  },
];

const thirdGeneration = [
  {
    name: 'Prince Charles',
    parents: [secondGeneration[0].name, secondGeneration[1].name],
    childOf: function () {
      return childOfHelper(this.parents);
    },
  },
];

function childOfHelper(arr) {
  return arr.map((el) => el).join(' & ');
}

module.exports = {
  secondGeneration,
  thirdGeneration,
  childOfHelper,
};
