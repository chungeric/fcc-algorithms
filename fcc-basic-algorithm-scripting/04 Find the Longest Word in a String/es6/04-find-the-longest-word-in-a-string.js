function findLongestWord(str) {
  return str.split(' ').reduce((acc,cur) => {
    if (cur.length > acc) acc = cur.length;
    return acc;
  }, 0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
