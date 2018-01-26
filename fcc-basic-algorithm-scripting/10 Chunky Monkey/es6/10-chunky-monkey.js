function chunkArrayInGroups(arr, size) {
  let group = [];
  return arr.reduce((acc,cur,i) => {
    group.push(cur);
    if ((i+1) % size === 0) {
      acc.push(group);
      group = [];
    }
    return acc;
  },[]);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
