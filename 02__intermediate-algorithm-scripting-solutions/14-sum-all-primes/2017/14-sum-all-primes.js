function sumPrimes(num) {
  var sum = 0;
  var divisorCount = 0;
  if(num === 0 || num === undefined) return 0;
  for(var i = 1; i <= num; i++) { // current number
    for(var j = 1; j<=i; j++) { // checks all numbers before current number
      if(i%j === 0) { // checks if this is a divisor
        divisorCount++;
      }
    }
    // deciding if the number is prime (divisible only by itself and 1 i.e. two divisors)
    if(divisorCount === 2) {
      sum += i;
    }
    divisorCount = 0; // reset divisorCount after each current number check
  }
  return sum;
}

sumPrimes(10);
