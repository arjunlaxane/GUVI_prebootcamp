//Write a code to print elements in the inner arrays
// Output: 1234567891011

let numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let str_all = '';
for (let i = 0; i < numsArr.length; i++) {
  let inner_array = numsArr[i];
  for (let j = 0; j < inner_array.length; j++) str_all += inner_array[j];
}
console.log(str_all);
