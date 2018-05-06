// jshint esversion:6
function chunkArrayInGroups(arr, size) {
  let outer = [];
  for (let i = 0; i < arr.length; i+=size) {
    outer.push(arr.slice(i,i+size));
  }
  return outer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
