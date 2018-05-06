// jshint esversion:6
function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  while(min <= max) {
    sum += min;
    min++;
  }
  return sum;
}

sumAll([1, 4]);
