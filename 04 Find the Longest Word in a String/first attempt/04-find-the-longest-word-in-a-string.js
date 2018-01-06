function findLongestWord(str) {
  var arr = [];
  var word = "";
  arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
