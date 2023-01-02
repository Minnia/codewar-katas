function isValidWalk(walk) {
  //north-south
  let ns = 0;
  //west-east
  let we = 0;

  for (let dir of walk) {
    if (dir === "n") ns += 1;
    if (dir === "s") ns -= 1;
    if (dir === "w") we += 1;
    if (dir === "e") we -= 1;

    console.log(walk);
  }
  console.log(walk.length);
  return walk.length == 10 && ns === 0 && we === 0;
}
isValidWalk("s", "s", "s", "e", "e", "n", "n", "n", "w", "w");

// v -1 one step south
// v -2 one step south
// v -3 one step south
// > -1 one step east
// > -2 one step east
// ^ -2 one step north
// ^ -1 one step north
// ^ 0 one step north
// < -1 one step west
// < 0 one step west

//---xxx----------------
//---x-x----------------
//---x-x----------------
//----xx----------------
