//Write a code to print elements in the inner arrays in reverse
//Output: 11 10 9 8 7 6 5 4 3 2 1

let numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let str_all = '';
for (let i = numsArr.length - 1; i >= 0; i--) {
  let inner_array = numsArr[i];
  for (let j = inner_array.length - 1; j >= 0; j--) {
    str_all += inner_array[j] + ',';
  }
}
console.log(str_all.slice(0, -1));
