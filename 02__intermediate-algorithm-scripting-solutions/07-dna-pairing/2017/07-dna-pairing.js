function pairElement(str) {
  var bPairs = [["A", "T"], ["C", "G"]];
  var dnaArr = [];
  for (var i in str) {
    var pair = [str[i]];
    for (var p in bPairs) {
      var index = bPairs[p].indexOf(str[i]);
      switch(index) {
        case 0:
          pair.push(bPairs[p][1]);
          dnaArr.push(pair);
          break;
        case 1:
          pair.push(bPairs[p][0]);
          dnaArr.push(pair);
          break;
        case -1:
          break;
      }
    }
  }
  return dnaArr;
}

pairElement("GCG");
