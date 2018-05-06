// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(collectionCopy[id].hasOwnProperty(prop)) {
    if(value === "") {
      delete collectionCopy[id][prop];
    } else if(prop === "tracks") {
      collectionCopy[id].tracks.push(value);
    }
  } else { // object does not have property
    if(value !== "") {
      if(prop === "tracks") {
        collectionCopy[id][prop] = Array(value);
      } else {
        collectionCopy[id][prop] = value;
      }
    }
  }

  return collectionCopy;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
