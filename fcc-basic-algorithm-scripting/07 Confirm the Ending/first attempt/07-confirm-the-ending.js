function confirmEnding(str, target) {
  var endLength = target.length; // gets the length of the target string to use in the substr() method.
  return (str.substr(str.length-endLength, endLength) === target);
}

confirmEnding("Bastian", "n");
