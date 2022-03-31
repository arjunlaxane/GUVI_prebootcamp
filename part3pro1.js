//GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

//Fix the code to get the largest of three.

const aa = (f, s, t) => {
  if (f > s && f > t) {
    console.log(f, 'f is largest');
  } else if (s > f && s > t) {
    console.log(s, 's is largest');
  } else {
    console.log(t, 't is largest');
  }
};
aa(1, 2, 3);
