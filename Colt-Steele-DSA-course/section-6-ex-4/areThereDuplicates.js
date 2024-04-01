function areThereDuplicates() {
  let freqArg = {};
  let newArr = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Number.isInteger(arguments[i])) {
      let numToStr = arguments[i].toString();
      newArr.push(numToStr);
    } else if (typeof arguments[i] === "string") {
      newArr.push(arguments[i]);
    }
  }
  for (let val of newArr) {
    freqArg[val] = (freqArg[val] || 0) + 1;
  }
  console.log(freqArg);
  for (let key in freqArg) {
    if (freqArg[key] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
