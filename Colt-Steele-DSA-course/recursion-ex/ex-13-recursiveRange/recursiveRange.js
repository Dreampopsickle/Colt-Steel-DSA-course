// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  let sum;
  function helper(helperInput) {
    let innerSum = helperInput - 1;
    sum += innerSum;
    if (innerSum === 0) {
      return;
    }

    return helper(innerSum);
  }
  helper(num);
  return sum;
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
