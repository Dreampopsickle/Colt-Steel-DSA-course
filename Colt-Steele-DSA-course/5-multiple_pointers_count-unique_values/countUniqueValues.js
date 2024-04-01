function countUniqueValues(arr1) {
  if (arr1.length === 0) return 0;

  let count = 1;

  // Loop through array
  for (let i = 1; i < arr1.length; i++) {
    let leftPointer = arr1[i - 1];
    let rightPointer = arr1[i];
    if (leftPointer !== rightPointer) {
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
