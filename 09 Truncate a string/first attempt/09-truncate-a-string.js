function truncateString(str, num) {
  var newStr = "";
  if (str.length > num && num > 3) {
    newStr = str.slice(0, num-3) + "...";
    return newStr;
  } else if (num <= 3) {
    newStr = str.slice(0, num) + "...";
    return newStr;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
