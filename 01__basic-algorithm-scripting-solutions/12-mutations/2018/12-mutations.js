// jshint esversion:6
function mutation(arr) {
  let word = arr[0].toLowerCase();
  let test = arr[1].toLowerCase().split('');
  return test.every(letter => word.includes(letter));
}

mutation(["hello", "hey"]);
