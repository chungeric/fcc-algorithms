function convertHTML(str) {
  var specialArr = ["&", "<", ">", '"', "'"];
  var htmlEnt = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  return str.replace(/[&<>"']/g, function(match){
    return htmlEnt[specialArr.indexOf(match)];
  });
}

convertHTML("Hamburgers < Pizza < Tacos");
