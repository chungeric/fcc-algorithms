function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var words = [];
  var word = '';
  for (var i in str){
    if (str[i].match(/[-_\s]/) !== null){
      if (word !== ''){
        words.push(word);
        word = '';
      }
    }
    else if (i > 0 && i !== 0 && str[i].match(/[A-Z]/) !== null && str[i-1].match(/[a-z]/) !== null){
        words.push(word);
        word = '';
        word += str[i];
    }
    else {
      word += str[i];
      if (i == str.length-1) {
        words.push(word);
      }
    }
  }
  return words.join("-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
