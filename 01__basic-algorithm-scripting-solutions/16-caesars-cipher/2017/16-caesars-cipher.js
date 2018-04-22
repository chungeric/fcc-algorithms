function rot13(str) { // LBH QVQ VG!
  var strDecoded = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) <= 77) {
      strDecoded += String.fromCharCode(str.charCodeAt(i) + 13);
    }
    else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 123) {
      strDecoded += String.fromCharCode(str.charCodeAt(i) - 13);
    }
    else {
      strDecoded += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return strDecoded;
}


// Change the inputs below to test
rot13("LBH QVQ VG!");
