//Simple recursive loop
//Counts down from 100 to 1
//The challenge was to let i start at 0 while counting down from 100

let count = 0;
let number = 100;

for (let i = 0; i < 100; i++) {
  number--;
  count++;
  console.log(i, number, count);
}
