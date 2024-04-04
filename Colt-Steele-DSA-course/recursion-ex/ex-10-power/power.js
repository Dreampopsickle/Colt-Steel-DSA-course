// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  // initialize base and exponent vars in parameters
  // set up base case
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);

  // return base to the power of exponent
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
