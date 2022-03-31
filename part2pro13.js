// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

let numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let sum_odd = 0;
let sum_even = 0;
for (let i = 0; i < numsArr.length; i++) {
  let inner_array = numsArr[i];
  for (let j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 !== 0) {
      sum_odd += inner_array[j];
    } else {
      sum_even += inner_array[j];
    }
  }
}
console.log(sum_odd);
console.log(sum_even);
