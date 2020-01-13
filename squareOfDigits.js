//Rewrite code
const squareOfDigits = num => {
  return Number(
    //make it into string
    ("" + num)
      //split every number into individual pieces
      .split("")
      //map through each number and times it by itself
      .map(n => n * n)
      //join together the results in a string.
      //The Number of line 3 makes it a number
      .join("")
  );
};

console.log(squareOfDigits(9119));
