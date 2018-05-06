// jshint esversion:6
function findLongestWord(str) {
  return str.split(' ').reduce((acc,nxt) => {
    return nxt.length > acc ? nxt.length : acc;
  }, 0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
