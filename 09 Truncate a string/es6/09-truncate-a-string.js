function truncateString(str, num) {
  return (num <= 3) ? `${str.slice(0,num)}...` : //else
  (str.length > num) ? `${str.slice(0,num-3)}...` : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
