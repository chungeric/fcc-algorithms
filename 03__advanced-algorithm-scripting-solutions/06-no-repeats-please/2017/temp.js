function permAlone(str) {
  var array = str.split("");
  var result = 0;

  function swap(a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    //return 0;
  }

  function generate(n) { // N = ARRAY LENGTH
    if(n === 1 && !/([a-z])\1/g.test(array.join(""))) {
      result++;
    } else {
      for(var i = 0; i < n; i++) {
        generate(n-1);
        swap(n%2 ? 0 : i, n-1);
        /*if(n % 2 === 0) {
          swap(i, n-1);
        } else if (n % 2 === 1) {
          swap(0, n-1);
        }*/
      }
    }
  }

  generate(array.length);
  return result;
}

permAlone('aab');
