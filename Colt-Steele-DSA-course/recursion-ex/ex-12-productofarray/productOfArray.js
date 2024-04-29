function productOfArray(arr) {
  // base case: if arr.length is 1, return only element
  function helper(helperInput) {
    if (helperInput.length === 1) {
      return helperInput[0];
    }
    return helperInput[0] * helper(helperInput.slice(1));
  }
  if (arr.length === 0) return null;
  return helper(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
