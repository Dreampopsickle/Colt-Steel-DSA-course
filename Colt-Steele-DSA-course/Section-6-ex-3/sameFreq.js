function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  //check if num1 and num2 are integers
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return false;
  }
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) {
    return false;
  }
  //set up frequency counters for both nums as objects
  let freq1 = {};
  let freq2 = {};
  //populate objects using for loop
  for (let val of num1String) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of num2String) {
    freq2[val] = (freq2[val] || 0) + 1;
  }
  console.log(freq1);
  console.log(freq2);
  //check key in counters, if key is in there (true), if not (false)
  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq2[key] !== freq1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(222, 222));
