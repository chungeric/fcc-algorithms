function chunkArrayInGroups(arr, size) {
  for (i = 0, outer = []; i < arr.length; i+=size) {
    outer.push(arr.slice(i, i+size));
  }
  return outer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
