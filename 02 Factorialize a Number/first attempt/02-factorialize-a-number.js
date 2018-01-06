function factorialize(num) {
  var og = num;
  var i = 1;
  if (num === 0) {
    return 1;
  }
  else {
    while (i < og) {
      num *= (og - i);
      i++;
    }
  }
  return num;
}

factorialize(5);
