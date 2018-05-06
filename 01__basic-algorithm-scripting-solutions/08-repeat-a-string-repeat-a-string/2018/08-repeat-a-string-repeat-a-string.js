function repeatStringNumTimes(str, num) {
  // padEnd is a new feature in ES8/ES2017
  return num < 0 ? '' : str.padEnd(str.length * num, str);
}

repeatStringNumTimes("abc", 3);
