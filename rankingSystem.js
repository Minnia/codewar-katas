//If you want to return the rank in order
const ranks = [4, 3, 5, 83];
function rankings(arr) {
  const slicedArr = arr.slice().sort((a, b) => b - a);
  const rank = arr.map((r) => slicedArr.indexOf(r) + 1);
  return rank;
}

rankings(ranks);

//If you want to return the rank in the order of the original array

function rankingsNotOrdered(arr) {
  const sortedArray = arr.sort((a, b) => b - a);
  const rank = arr.map((r) => sortedArray.indexOf(r) + 1);
  return rank;
}

rankingsNotOrderedngs(ranks);
