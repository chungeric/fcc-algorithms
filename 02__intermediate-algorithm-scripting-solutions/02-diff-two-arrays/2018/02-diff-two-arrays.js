// jshint esversion:6
function diffArray(arr1, arr2) {
  return [...arr2.filter(el=>!arr1.includes(el)), ...arr1.filter(el=>!arr2.includes(el))];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
