function fearNotLetter(str) {
  var prevCode = 0;
  for (var i in str) {
    if (prevCode !== 0) {
      if (str.charCodeAt(i) - prevCode !== 1) return String.fromCharCode(prevCode+1);
    }
    prevCode = str.charCodeAt(i);
  }
  return undefined;
}

fearNotLetter("qrtuv");
