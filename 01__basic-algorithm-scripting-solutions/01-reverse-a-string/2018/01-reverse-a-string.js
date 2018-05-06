// jshint esversion:6
function reverseString(str) {
  return [...str].reverse().join('');
  // let arr = str.split('');
  // for (let i = 0, len = arr.length; i < len/2; i++) {
  //   [arr[i], arr[len-1-i]] = [arr[len-1-i], arr[i]];
  // }
  // return arr.join('');
}

reverseString('hello');
