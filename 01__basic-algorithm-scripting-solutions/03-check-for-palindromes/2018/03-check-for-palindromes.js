// jshint esversion:6
function palindrome(str) {
  let lower = str.toLowerCase();
  let filtered = [...lower].filter(el => /[a-z0-9]/g.test(el));
  return filtered.join('') === filtered.slice().reverse().join('');
}

palindrome("1 eye for of 1 eye.");
