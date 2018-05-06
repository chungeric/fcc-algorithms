function sym(args) {
  //var array = [];
  var count = 0;

  // CREATES A NEW ARRAY FROM ARGUMENTS PROVIDED
  var array = Array.prototype.slice.call(arguments);
  /*for(var argument in arguments) {
    array.push(arguments[argument]);
  }*/

  return array.reduce(function(accu, curr){
    // REMOVES DUPLICATE VALUES FROM THE CURRENT ARGUMENT
    var uniqueValues = [];
    for(var i in curr) {
      if(uniqueValues.indexOf(curr[i]) === -1) uniqueValues.push(curr[i]);
    }

    // CYCLES THROUGH CURRENT ARGUMENT'S UNIQUE VALUES AND CHECKS IF ANY ARE IN THE ACCUMULATOR
    // IF A VALUE IS NOT YET IN THE ACCUMULATOR, WE PUSH THAT VALUE.
    // IF A VALUE IS ALREADY IN THE ACCUMULATOR, THEN REMOVE IT FROM THE ACCUMULATOR
    for(var item in uniqueValues) {
      if(accu.indexOf(uniqueValues[item]) === -1) {
        accu.push(uniqueValues[item]);
      } else {
        accu.splice(accu.indexOf(uniqueValues[item]), 1);
      }
    }

    return accu;
  }, []).sort();
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
