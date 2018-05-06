function sumFibs(num) {
  var oddFibonacciArray = [1, 1];
  var prev = 1;
  var curr = 1;
  var sum = 2;

  if(num < 2 || num === undefined) {
    return 0;
  }

  while(sum <= num){
    if (sum%2 == 1) oddFibonacciArray.push(sum);
    prev = curr;
    curr = sum;
    sum = prev+curr;
  }

  return oddFibonacciArray.reduce(function(a, b){
    return a + b;
  });
}

sumFibs();
