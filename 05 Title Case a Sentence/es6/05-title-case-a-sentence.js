function titleCase(str) {
  let arr = str.split(' ');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`${arr[i].split('')[0].toUpperCase()}${arr[i].slice(1).toLowerCase()}`);
  }
  return result.join(' ');
}

titleCase("I'm a little tea pot");
