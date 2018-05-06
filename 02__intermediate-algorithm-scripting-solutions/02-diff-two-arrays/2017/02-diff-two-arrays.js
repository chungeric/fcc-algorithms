function compareArrays(item) {

}

function diffArray(arr1, arr2) {
  var tempArr = [];
  var filteredArr1 = arr1.filter(function(item){
    return arr2.indexOf(item) === -1;
  });
  var filteredArr2 = arr2.filter(function(item){
    return arr1.indexOf(item) === -1;
  });

  var newArr = filteredArr1.concat(filteredArr2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
