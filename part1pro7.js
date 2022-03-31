// If you run the below script you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

//here 2<12 so, false, thus diffused
//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
//script.js
let a = '2' > '12';
//Don't touch below this
if (a) {
  console.log('Code is Blasted');
} else {
  console.log('Diffused');
}
