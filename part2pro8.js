// Write a code to add the even numbers and subract the odd numbers
// Output: 94

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
let sub = 0;
for (let i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 === 0) {
    sum += numsArr[i];
  } else {
    sub -= numsArr[i];
  }
}
console.log(sum, sub);
