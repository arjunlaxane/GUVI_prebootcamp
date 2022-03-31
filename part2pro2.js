//2.Write a code to print the numbers in the array
//Output: 1,2,3,4,5,6,7,8,9,10,11
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_string = '';

for (var i = 0; i < numsArr.length; i++) {
  new_string += numsArr[i] + ',';
}
console.log(new_string.slice(0, -1));
