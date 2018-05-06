function steamrollArray(arr) {
  // use reduce(), concat(), and recursion
  return arr.reduce(function(acc, element){
    if(Array.isArray(element)) {
      return steamrollArray(acc.concat(element));
    }
    else {
      return acc.concat(element);
    }
  }, []);
}

steamrollArray([[["a"]], [["b"], 5]]);

//["a", ["b"]]

/*
for(var i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      steamrollArray(arr[i]);
    }
  }
  return flatArray;
*/

  /*var flatArray = [];
  var value;
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      for(var j = 0; j < arr[i].length; j++) {
        if(Array.isArray(arr[i][j])) {
          value = arr[i][j][0];
          while(Array.isArray(value)){
            value = value[0];
          }
          flatArray.push(value);
        }
        else {
          flatArray.push(arr[i][j]);
        }
      }
    }
    else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;*/
