// jshint esversion:6
function titleCase(str) {
  return str.split(' ').map(word=>word.toLowerCase()).map(word=>{
    // \b\w matches the first alphanumeric character of a word
    return word.replace(/\b\w/, letter=>letter.toUpperCase());
  }).join(' ');
}

titleCase("I'm a little tea pot");
