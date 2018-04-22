function palindrome(str) {
  let lower = str.toLowerCase();
  let newStr = lower.split('').filter(el => /[A-Za-z0-9]/g.test(el));
  return newStr.join('') === newStr.slice().reverse().join('');
}

palindrome("1 eye for of 1 eye.");
