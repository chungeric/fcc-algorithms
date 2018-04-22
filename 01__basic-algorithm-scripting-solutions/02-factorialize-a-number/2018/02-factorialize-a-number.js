function factorialize(num) {
  for (let i = num-1; i > 0; i--) {
    num *= i;
  }
  return num;
}

factorialize(5);
