function myReplace(str, before, after) {
  return str.replace(before, function(){
    if (before.charAt(0) === before.charAt(0).toUpperCase()){
      return after.replace(after.charAt(0), after.charAt(0).toUpperCase());
    } else { return after; }
  });
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
