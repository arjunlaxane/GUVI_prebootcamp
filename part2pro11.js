//Write a code to replace the array value — If the index is even, replace it with ‘even’.
//Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

let numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let str_all = '';
for (let i = 0; i < numsArr.length; i++) {
  let inner_array = numsArr[i];
  for (let j = 0; j < inner_array.length[i]; j++) {
    if ([j] % 2 === 0) {
      numsArr[j] = 'even';
    }
  }
}
console.log(numsArr);
