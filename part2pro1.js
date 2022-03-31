///GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops

//1.Write a code to print the numbers in the array
///Output: 1234567891011
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';

for (let i = 0; i < 11; i++) {
  new_string += numsArr[i];
}
console.log(new_string);
