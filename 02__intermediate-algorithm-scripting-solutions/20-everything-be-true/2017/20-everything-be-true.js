function truthCheck(collection, pre) {
  // check if object has predicate(value)
  // if it does, check its value
    // if value is falsy, return false;
    // else, return true;
  // else, return false;

  for(var i = 0; i < collection.length; i++) {
    if(collection[i].hasOwnProperty(pre)) {
      if (Boolean(collection[i][pre])) {
        // :) continue
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
