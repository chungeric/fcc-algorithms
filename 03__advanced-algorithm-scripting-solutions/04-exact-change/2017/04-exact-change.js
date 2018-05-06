function checkCashRegister(price, cash, cid) {
  var change = (cash*100) - (price*100);
  var values = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  var names = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  var changeArray = [];
  var result = [];
  // CREATES AN OBJECT FROM ARGUMENT ARRAY CID
  var cidObj = {};
  for(var i = 0; i < cid.length; i++) {
    cidObj[cid[i][0]] = (cid[i][1]*100);
  }
  for(var j = 0; j < values.length; j++) {
    if(change >= values[j] && cidObj[names[j]] >= values[j]) {
      cidObj[names[j]] -= values[j];
      change -= values[j];
      change = Math.round(change*100)/100;
      if(result[0] !== names[j]) {
        if(result.length > 0) {
          result[1] /= 100;
          changeArray.push(result);
        }
        result = [names[j], values[j]];
      } else {
        result[1] += values[j];
      }
      j = 0;
    }
  }
  result[1] /= 100;
  changeArray.push(result);

  if(change === 0) {
    var count = 0;
    Object.values(cidObj).forEach(function(value){ if(value === 0)  count++; });
    if(count === 9){
      return "Closed";
    } else {
      // RETURN THE CHANGE IN AN ARRAY OF ARRAYS
      return changeArray;
    }
  } else {
    return "Insufficient Funds";
  }
}

checkCashRegister(23.53, 74.60, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
