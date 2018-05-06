// jshint esversion:6
function rot13(str) {
  let decoded = [...str].map(el => el.charCodeAt(0)).map(el => {
    // If element is not uppercase letter
    if (el<65 || el>90) return el;
    // If element unicode value will go past 90 'Z', add remainder to value of 'A'
    return el > 77 ? 64 + 13-(90-el) : el + 13;
  });
  return String.fromCharCode(...decoded);
}

rot13("SERR CVMMN!");
