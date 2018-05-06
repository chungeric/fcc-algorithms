function uniteUnique(arr) {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++){ // each argument passed
    for (var j = 0; j < arguments[i].length; j++){ // each element in that argument
      if (newArr.indexOf(arguments[i][j]) === -1) // if not yet found, add to new Array
        newArr.push(arguments[i][j]);
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
