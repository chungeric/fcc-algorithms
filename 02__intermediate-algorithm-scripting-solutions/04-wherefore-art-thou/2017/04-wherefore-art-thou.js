function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKeys = Object.keys(source);
  var match = true;
  for (var i = 0; i < collection.length; i++) {
    // for each object in collection
    for (var j = 0; j < sourceKeys.length; j++) {
      // for each key in source
      if (collection[i].hasOwnProperty(sourceKeys[j]) && collection[i][sourceKeys[j]] === source[sourceKeys[j]]){
        match = true;
      }
      else {
        match = false;
      }
    }
    if (match) {
      arr.push(collection[i]); // for each collection object, if all source keys and their values matched the collection objects, then we add that object to the array
    }
  }


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
