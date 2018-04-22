function bouncer(arr) {
  var newArr = arr.filter(function (val) {
    return(Boolean(val));
  });
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
