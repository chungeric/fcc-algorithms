function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var c in str) {
    if(vowels.indexOf(str[c])>-1){
      var index = str.indexOf(str[c]);
      var newStr = str.substr(index) + str.substr(0, index);
        if (index === 0) newStr += "way";
          else newStr += "ay";
      return newStr; // return so that for loop does not continue
    }
  }
  return;
}

translatePigLatin("hello");
