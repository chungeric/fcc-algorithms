function titleCase(str) {
  var arr = [];
  var newStr = "";
  newStr = str.toLowerCase();
  arr = newStr.split(" ");

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    wordArr = word.split("");
    var capital = wordArr[0].toUpperCase();
    wordArr.shift();
    wordArr.unshift(capital);
    word = wordArr.join("");
    arr[i] = word;
  }
  str = arr.join(" ");
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
