//Rewrite code

function getCount(str) {
  const arrayOfVowels = ["a", "e", "i", "o", "u"];
  const matchingVowels = [...str].filter(char => arrayOfVowels.includes(char));
  return matchingVowels.length;
}

console.log(getCount("hello")); //2
