function factorial(num) {
  // establish base case where 0! is 1
  if (num === 0) return 1;
  return num * factorial(num - 1);
  // return recursive function
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
