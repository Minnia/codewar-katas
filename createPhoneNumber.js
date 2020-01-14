//Rewrite code
const createPhoneNumber = numbers => {
  const formatPhoneNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      formatPhoneNumber.push("(" + numbers[i]);
    } else if (i === 2) {
      formatPhoneNumber.push(numbers[i] + ")");
    } else if (i === 3) {
      formatPhoneNumber.push(" " + numbers[i]);
    } else if (i === 5) {
      formatPhoneNumber.push(numbers[i] + "-");
    } else {
      formatPhoneNumber.push(numbers[i]);
    }
  }
  return formatPhoneNumber.join("");
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (1,2,3) 456-7890
