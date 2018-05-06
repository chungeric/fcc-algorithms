// jshint esversion:6
function destroyer(arr) {
  return arr.filter(el => ![].slice.call(arguments,1).includes(el));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
