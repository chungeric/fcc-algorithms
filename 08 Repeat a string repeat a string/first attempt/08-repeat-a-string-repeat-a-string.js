function repeatStringNumTimes(str, num) {
  var rptStr = "";
  while (num > 0) {
    rptStr += str;
    num--;
  }
  return rptStr;
}

repeatStringNumTimes("#F7", 7);
