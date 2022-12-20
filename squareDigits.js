const squareDigits = (nums) => {
  //make array into string and split each number into its own string
  const arr = nums
    .toString()
    .split("")
    .map(function (num) {
      //map through the string, make into integer and set i to current value of num
      const i = parseInt(num);
      //times i by itself and return the value
      return i * i;
    });
  //make into integers and join array values
  return parseInt(arr.join(""));
};
