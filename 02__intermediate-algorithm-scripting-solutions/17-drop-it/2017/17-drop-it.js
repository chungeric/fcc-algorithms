function dropElements(arr, func) {
  var firstMatchIndex = arr.indexOf(arr.filter(func)[0]);
  if (firstMatchIndex < 0) { // if no elements pass test, indexOf will return -1
    return [];
  }
  return arr.slice(firstMatchIndex);
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
