// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  let sum = 0;
  function helper(helperInput) {
    sum += helperInput; // Add current number to sum
    if (helperInput === 0) {
      return sum; // Return when base case in reached
    }

    return helper(helperInput - 1); // Continue recursion with next lowest number
  }
  return helper(num); // Start helper with initial number
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
