/////////PENDING////////
/*
//Fix the code to sum the number in that array

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//const sum = (a, b) => a + b;
//let sum = num.reduce(x);

const x = function (num) {
  let sum = 0;
  sum = num.reduce(x);
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
  return sum;
};

/*

/////////PENDING////////

//Fix the code to rotate an array by k times and return rotated array using IIFE function

let arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
let k = 3;
k = arr.length % k;
(function () {
  arr = {};
  out = arr.slice(k + 1, arr.length);
  let count = out.length;
  for (let i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
  }
  console.log(out);
})();
*/
