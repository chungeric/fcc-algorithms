function palindrome(str) {
  var array = [];
  var newStrVar = "";
  var count = 0;
  newStrVar = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
  console.log(newStrVar);
  array = newStrVar.split("");
  var j = array.length-1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[j]) {

    }
    else {
      return false;
    }
    j--;
  }
  return true;
}

palindrome("eye");
