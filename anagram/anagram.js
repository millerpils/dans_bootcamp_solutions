/*
  Instructions:

  - take any array of strings and return the anagrams, grouped in an array

  input: [altered, education, scar, auctioned, related, cars, arcs, lean]
  output: [[altered, related], [education, auctioned], [scar, cars, arcs], [lean]]
*/

const sortWord = (word) => word.split("").sort().join("");

const anagram = (cleanArr) => {
  let words = [];
  let indexes = [];

  for (let i = 0; i < cleanArr.length; i++) {
    words.push(sortWord(cleanArr[i]));
    indexes.push(i);
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] > words[j]) {
        temp = words[i];
        words[i] = words[j];
        words[j] = temp;

        temp = indexes[j];
        indexes[j] = indexes[i];
        indexes[i] = temp;
      }
    }
  }

  let finalArr = [[cleanArr[indexes[0]]]];

  for (let i = 1; i < words.length; i++) {
    if (words[i] === words[i - 1]) {
      // if current word matches, final current slot and push in latest
      finalArr[finalArr.length - 1].push(cleanArr[indexes[i]]);
    } else {
      // if it doesn't match, push result to new arr slot
      finalArr.push([cleanArr[indexes[i]]]);
    }
  }

  return finalArr;
};

console.log(
  anagram([
    "altered",
    "cars",
    "scar",
    "auctioned",
    "education",
    "arcs",
    "lean",
    "related",
  ])
);
