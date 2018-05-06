// jshint esversion:6
function truncateString(str, num) {
  if (str.length <= num) return str;
  return (str.length > 3 && num > 3) ? `${str.slice(0,Math.abs(num-3))}...` : `${str.slice(0,num)}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
