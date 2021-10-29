/*
  Instructions:

  - take any array of strings and return the anagrams, grouped in an array

  input: [altered, education, scar, auctioned, related, cars, arcs, lean]
  output: [[altered, related], [education, auctioned], [scar, cars, arcs], [lean]]
*/

const sortWord = (word) => word.split('').sort().join('');

const cleanArr = [
  'altered',
  'education',
  'scar',
  'auctioned',
  'related',
  'cars',
  'arcs',
  'lean',
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

/* resultArr = words.map( (el, index) => {
  return cleanArr[indexes[index]]
})

console.log(resultArr)
  */
console.log(cleanArr);
console.log(words);
console.log(indexes);
