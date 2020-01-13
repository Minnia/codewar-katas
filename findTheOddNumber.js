//Rewrite code
// const findOddNumInArray = Arr => {
//   let count = 0;
//   for (let i = 0; i < Arr.length; i++) {
//     for (let j = 0; j < Arr.length; j++) {
//       if (Arr[i] === Arr[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return Arr[i];
//     }
//   }
// };

function findOdd(A) {
  let count = 0;
  //loop through the array
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      //compare the index to see if the type and value are the same
      if (A[i] === A[j]) {
        count++;
      }
    }
    //if count is not divisible by 2, return the index
    if (count % 2 !== 0) {
      return A[i];
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 3, 1, 2, 4, 20, 4, -1, -2, 5])); //3
