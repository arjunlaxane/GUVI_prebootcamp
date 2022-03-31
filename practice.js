'use strict';
/*
let flag;
let date;
let inputValue = 4;
let inputDOB = [
  '23',
  'MARCH',
  '1996',
  '23',
  'MARCH',
  '1986',
  '22',
  'JULY',
  '1987',
  '23',
  'APRIL',
  '1987',
];
//let DOB = +inputDOB[0];
//let month = inputDOB[1];
//let year = +inputDOB[2];
//console.log(inputDOB)
let DOB = [];
let month = [];
let year = [];

for (let i = 0; i < inputDOB.length; i = i + 3) {
  if (typeof +inputDOB[i] === 'number') {
    DOB.push(+inputDOB[i]);
  }
}
console.log(DOB);

for (let j = 1; j < inputDOB.length; j = j + 3) {
  if (typeof inputDOB[j] === 'string') {
    month.push(inputDOB[j]);
  }
}
console.log(month);

for (let k = 2; k < inputDOB.length; k = k + 3) {
  if (typeof +inputDOB[k] === 'number') {
    year.push(inputDOB[k]);
  }
}
console.log(year);
//////////////////////////////////
for (let l = 1; l <= DOB.length; l++) {
  if (+year[l] <= 1987) {
    if (
      month[l] === 'JANUARY' ||
      'MARCH' ||
      'MAY' ||
      'JULY' ||
      'AUGUST' ||
      'OCTOBER' ||
      'DECEMBER'
    ) {
      console.log(l);
      flag = true;
    } else {
      flag = false;
      break;
    }
  } else {
    console.log(-1);
  }
}
*/
/*
let stringis = ['I', 'was', 'born', 'on', '12', 'october', '1998.'];
let numberarr = [];
for (let i = 0; i < stringis.length; i++) {
  if (typeof +stringis[i] === 'number') {
    numberarr.push(stringis[i]);
  }
}
console.log(numberarr);
*/
/*
let sum = 0;
let ans;
let totalNumber = 2;
let givenNumbers = ['3', '0'];
for (let i = 0; i < totalNumber; i++) {
  if (+givenNumbers[i] < 0) {
    sum += +givenNumbers[i];
  } else {
    ans = 0;
  }
}
console.log(sum);
console.log(ans);
*/

// let a = 10;
// let first = Math.floor(a / 10);
// console.log(first);
// let second = a/10;

/*
let n = 'Arjun';

for (let i = 1; i <= n.length; i++) {
  for (let j = i + 1; j <= n.length - i; j++) {
    console.log('hello');
  }
}
*/
/*
let n = 8;
//let m = 15;
let givenNumbers = ['50', '50', '65', '85', '85', '98', '98', '43'];

//let visited = Array.from({ length: n }, (i, j) => false);

for (let i = 0; i < n; i++) {
  //if (visited[i] === true) continue;

  //let count = 1;
  for (let j = 0; j < n; j++) {
    if (i === j) {
      continue;
    }
    if (+givenNumbers[i] === +givenNumbers[j]) {
      break;
    }
  }

  if (i === givenNumbers.length) {
    console.log(+givenNumbers[i]);
  }
}
*/

// let x = +givenNumber[i] & +givenNumber[i+1]  ;

//     console.log(x);

/*
let S = [
  'A',
  'B',
  'C',
  'd',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'z',
  '23',
];
let ans = '';
let asciiNum;

//console.log(S[0]);

for (let i = 0; i < S.length; i++) {
  asciiNum = S[i].charCodeAt();
  //console.log(asciiNum);

  if (asciiNum >= 65 && asciiNum <= 67) {
    ans += String.fromCharCode(asciiNum + 23);
  } else if (asciiNum >= 68 && asciiNum <= 90) {
    ans += String.fromCharCode(asciiNum - 3);
  } else if (asciiNum >= 97 && asciiNum <= 120) {
    ans += String.fromCharCode(asciiNum - 3);
  } else if (asciiNum >= 121 && asciiNum <= 122) {
    ans += String.fromCharCode(asciiNum - 3);
  } else {
    ans += S[i];
  }
}

console.log(ans);
*/

// let n1 = 44;
// let n2 = 66;

// let result;

// while (n1 > 0 && n2 > 0) {
//   let first = Math.floor(n1 / 10);
//   let second = Math.floor(n2 / 10);

//   result = (first + second) % 10;

// console.log(result);

// let arr = [1, 2];

// function removeDuplicates(data) {
//   return data.filter((value, index) => data.indexOf(value) === index);
// }
// let uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr);

// let arr1 = ['1', '2', '3'];
// //console.log(indexOf(2));
// let x = arr1.filter((value, index) => arr1.indexOf(value) === index);
// console.log(x);

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'A'];

// var uniqueArray = arr1.filter((value, index) => arr1.indexOf(value) === index);
// console.log(uniqueArray);

// let n = 1239;
// let rem;
// let rev = 0;

// while (n > 0) {
//   // while(n !==0)
//   rem = n % 10;
//   rev = rev * 10 + rem;
//   n = parseInt(n / 10);
// }

// console.log(rev);
// //output: infinity

// let dummy;

// for (let i = 1; i <= 4; i++) {
//   for (let j = 3; j >= i; j--) {
//     dummy = ' ';
//   }
//   for (let k = 1; k <= i; k++) {
//     dummy = '*';
//   }
//   console.log(dummy);
// }

// let ans = 'Hello';
// console.log(ans.trimEnd());
// console.log(ans.length);

// let a = 'guvi';
// let x = a.split('');
// console.log(x.join(' '));

// let arr = ['1', '2', '3', '4', '5', '6', '7'];
// let sum = 0;
// arr.map(g => {
//   sum += +g;
// });
// console.log(sum);

/*
function Suman(a, b) {
  let min = Math.min.apply(Math, [a, b], (max = Math.max.apply(Math, [a, b])));
  return this > min && this < max;
}
*/

/*
function Suman(data) {
    // Extracts Numbers from Any strings 
  let result = data.match(/\d+/g);
  console.log(result);
}
*/

/*
Regular Expression # pattern matching 

\d # searh for digits 

\D # search for non digits 

\w # search for special character 

\O # search for null character

d+ # match any string which have alteast One

*/

/*
// product of the digits
function Suman(number) {
  let product = 1;
  while (number > 0) {
    let remainder = number % 10;
    product = product * remainder;
    number = Math.floor(number / 10);
  }
  return product;
}
*/

/*
let a = "2143";

let val = a.split("")

function add(val)
{
let sum = 0;
for(let i=0;i<a.length;i++)
{
sum += +val[i];
}
return sum;

}

let x = add(val);
console.log(x);
*/

/*
////array lcm/////

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

function findLcm(a, b) {
  let max = arr[0];

  ////find max number///

  for (let i = 0; i < n; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  //////initialize result to 1/////
  let result = 1;
  let commonFactor = 2;
  let indexes = [];
  while (commonFactor <= max) {
    for (let j = 0; j < n; j++) {
      if (arr[j] % commonFactor === 0) {
        indexes.push(j);
      }
    }

    if (indexes.length >= 2) {
      for (let j = 0; j < n; j++) {
        arr[indexes[j]] = arr[indexes[j]] / commonFactor;
        result = result * commonFactor;
      }
    } else {
      commonFactor++;
    }
  }

  for (let i = 0; i < n; i++) {
    result = result * arr[i];
  }
  return result;
}

let x = findLcm(arr, n);
console.log(x);
*/
/*
let count = 0;

for (let i = 1; i <= 5; i++) {
  let dummy = '';

  if (i % 2 !== 0) {
    for (let j = 1; j <= 3; j++) {
      count++;
      dummy += count + ' ';
    }
  } else {
    let temp = count + 1;

    for (let j = count + 3; j >= temp; j--) {
      count = count + 1;
      dummy += j + ' ';
    }
  }

  console.log(dummy);
}
/*
//op====> 1 2 3
//practice.js:396 6 5 4
//practice.js:396 4 5 6
//practice.js:396 9 8 7
//practice.js:396 7 8 9
*/

/*
let R = 5;
let count = 0;

for (let i = R; i >= 1; i--) {
  let dummy = '';

  if (i % 2 === 1) {
    for (let j = 1; j <= i; j++) {
      count = count + 1;
      dummy += j;
    }
  } else {
    let temp = count - 1;
    // console.log(temp);
    for (let k = temp; k >= 1; k--) {
      count = count - 1;
      dummy += k;
    }
  }
  console.log(dummy);
}
*/
/*
let n = 1;
let count = 0;
let rem;
let rev = 0;

for (let i = 1; i <= n; i++) {
  while (i !== 0) {
    rem = i % 10;
    rev = rev * 10 + rem;
    i = parseInt(i / 10);
    count++;
  }
}
console.log(count);
*/
/*
let N = 9;
let sum = 0;
for (let i = 0; i < N; i++) {
  for (let j = 1; j < N; j++) {
    if (N === Math.pow(i, j)) {
      sum += j;
    }
  }
  //console.log(sum);
}
console.log(sum);
*/
/*
let A = 200;
let B = 500;
let C = 1000000007;
let result = Math.pow(A, B) % C;
console.log(result);
*/

let n = [9, 8, 1, 7];
let sum = 0;
let arr = [];
let ans;
//let result = '';
for (let i = 0; i < 2; i++) {
  sum += +n[i];
  arr.push(sum);
}
console.log(sum);

for (let j = 2; j < n.length; j++) {
  let result = parseInt(+n[j] + '' + +n[j + 1]);
  if(result===sum)
  {
    console.log(1);
    break;
  }
  else
  {
 console.log(0);
  }
}
