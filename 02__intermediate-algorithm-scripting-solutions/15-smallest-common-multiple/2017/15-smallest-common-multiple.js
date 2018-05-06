function smallestCommons(arr) {
  var max = arr.reduce(function(a, b){ return Math.max(a, b); });
  var min = arr.reduce(function(a, b){ return Math.min(a, b); });
  var scm = max; // we iterate max to find the smallest common multiple
  for(var i = min; i <= max; i++) {
    if(scm % i !== 0){
      scm += max; // if the scm is not a multiple of one of the values in the range
      i = (min-1); // then we reset the for loop and increment scm to the next multiple of itself
    }
  }
  return scm;
}

smallestCommons([1,5]);
