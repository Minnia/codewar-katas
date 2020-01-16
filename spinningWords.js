// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter
// words reversed (Just like the name of this Kata). Strings passed
// in will consist of only letters and spaces. Spaces will be included
// only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) =>
// returns "Hey wollef sroirraw" spinWords( "This is a test") =>
// returns "This is a test" spinWords( "This is another test" )=>

const spinWords = string => {
  const splitWords = string.split(" ");
  const correctWordsLength = splitWords.map(word => {
    if (word.length >= 5) {
      return [...word].reverse().join("");
    }
    return word;
  });
  return correctWordsLength.join(" ");
};
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
