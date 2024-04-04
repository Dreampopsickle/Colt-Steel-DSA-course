function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!

  //check if array is empty, return false if that's the case
  if (arr.length === 0) {
    return false;
  }

  let count = 0;
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  //loop through array
  while (leftPointer < rightPointer) {
    let pairAvg =
      Math.floor(((arr[leftPointer] + arr[rightPointer]) / 2) * 10) / 10;
    if (pairAvg === num) {
      count++;
    }
  }
  return count; ///// stopped here, gotta figure out later
  //
  //setup up pointers and counter
  // add left and right pointers and divide by two to get average
  // every time average matches target, add to counter
  //if target hit, return true, return false if not
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
