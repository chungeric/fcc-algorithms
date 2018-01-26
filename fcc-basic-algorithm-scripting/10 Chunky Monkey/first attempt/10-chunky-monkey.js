function chunkArrayInGroups(arr, size) {
  var arrStr = arr.join("");
  var newArr = [];
  for (var i = 0; i < arrStr.length; i+=size) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
