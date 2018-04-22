function updateInventory(arr1, arr2) {
  var inventory = arr2.reduce(function(acc, cur){
    var exists = false;
    acc.forEach(function(value, i){
      if(cur[1] === value[1]) {
        acc[i][0] += cur[0];
        exists = true;
      }
    });
    if(!exists) {
      acc.push(cur);
    }
    return acc;
  }, arr1);

  return inventory.sort(function(a, b){
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
  });
}

/**/



// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
