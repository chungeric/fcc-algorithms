function destroyer(arr) {
  var argLength = arguments.length;
  var testArr = Array.from(arguments);
  testArr.shift();

  var newArr = arr.filter(function(value){
    if (testArr.indexOf(value) >= 0) {
      return false;
    }
    else {
      return true;
    }
  });

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
