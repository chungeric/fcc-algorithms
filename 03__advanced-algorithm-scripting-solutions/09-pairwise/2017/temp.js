function pairwise(arr, arg) {
  var usedElements = [];
  return arr.reduce(function(accu, curr, indexO, array) {
    array.forEach(function(value, indexI) {
      if(usedElements.indexOf(indexO) === -1 && usedElements.indexOf(indexI) === -1) {
        if(curr + value === arg && indexI !== indexO) {
          accu += indexO + indexI;
          usedElements.push(indexI);
          usedElements.push(indexO);
        }
      }
    });
    return accu;
  }, 0);
}

pairwise([0, 0, 0, 0, 1, 1], 1);
