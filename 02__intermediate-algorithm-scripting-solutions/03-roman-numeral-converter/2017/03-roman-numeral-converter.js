function convertToRoman(num) {
  var romanArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var numbersArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var roman = [];

  for (var i = 0; i < numbersArr.length; i++) {
    if(numbersArr[i] > num){
      roman.push(romanArr[i-1]);
      num -= numbersArr[i-1];
      i = 0;
      if (num === 0) return roman.join("");
    }
    else if(numbersArr[i] === num || i === numbersArr.length-1){
      roman.push(romanArr[i]);
      num -= numbersArr[i];
      i = 0;
      if (num === 0) return roman.join("");
    }
  }

  return 1;
}

convertToRoman(1004);
