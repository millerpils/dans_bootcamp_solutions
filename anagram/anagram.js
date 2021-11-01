/*
  Instructions:

  - take any array of strings and return the anagrams, grouped in an array

  input: [altered, education, scar, auctioned, related, cars, arcs, lean]
  output: [[altered, related], [education, auctioned], [scar, cars, arcs], [lean]]
*/

const sortWord = (word) => word.split('').sort().join('');

const cleanArr = [
  'altered',
  'cars',
  'scar',
  'auctioned',
  'education',
  'arcs',
  'lean',
  'related',
];

words = [];
indexes = [];

for (let i = 0; i < cleanArr.length; i++) {
  word = sortWord(cleanArr[i]);
  words.push(word);
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

finalArr = [];
matchArr = [cleanArr[indexes[0]]];

for (let i = 1; i < words.length; i++) {
  if (words[i] === words[i - 1]) {
    // if current word matches the one before it, store it
    matchArr.push(cleanArr[indexes[i]]);
  } else {
    // if it doesn't match, push to final array
    finalArr.push(matchArr);
    // reset the array with next word to check
    matchArr = [cleanArr[indexes[i]]];
  }
}

// push any stragglers
finalArr.push(matchArr);

console.log(finalArr);
