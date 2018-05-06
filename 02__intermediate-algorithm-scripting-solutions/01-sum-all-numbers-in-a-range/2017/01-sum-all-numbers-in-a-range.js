function sumAll(arr) {
  var tempArr = [];
  var max = arr.reduce(function(a, b){
    return Math.max(a, b);
  });
  var min = arr.reduce(function(a, b){
    return Math.min(a, b);
  });

  for (var i = min; i <= max; i++){
    tempArr.push(i);
  }
  return tempArr.reduce(function(a, b){
    return a + b;
  });
}

sumAll([1, 4]);
