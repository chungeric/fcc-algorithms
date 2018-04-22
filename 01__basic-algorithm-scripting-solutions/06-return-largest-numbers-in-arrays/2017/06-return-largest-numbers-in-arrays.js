function largestOfFour(arr) {
  var largestNumArr = [];
  for (var i = 0; i < arr.length; i++) {
    var largest = arr[i].sort(function(a, b){return a - b;}).pop(); // sorts each subarray from smallest to largest, then takes the end element (largest) and puts it into a variable.
    largestNumArr.push(largest);
  }
  return largestNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
