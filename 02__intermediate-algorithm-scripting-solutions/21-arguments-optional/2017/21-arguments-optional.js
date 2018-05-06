function addTogether(arg1, arg2) {

  if(arg2 === undefined && typeof arg1 === "number") { // only 1 argument provided
    return function(arg3){
      if (typeof arg3 === "number") {
        return arg1+arg3;
      }
      return undefined;
    };
  } else { // if 2 arguments provided
    if(typeof arg1 === "number" && typeof arg2 === "number") {
      return arg1+arg2; // if both arguments are valid numbers
    } else {
      return undefined;
    }
  }
}

addTogether("http://bit.ly/IqT6zt");
