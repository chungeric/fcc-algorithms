function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = Math.PI;
  for (var element in arr) {
    arr[element].orbitalPeriod = Math.round(2* pi * Math.pow( Math.pow(arr[element].avgAlt + earthRadius, 3) / GM, 0.5));
    delete arr[element].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
