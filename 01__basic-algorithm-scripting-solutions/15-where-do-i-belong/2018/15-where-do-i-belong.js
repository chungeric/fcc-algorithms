// jshint esversion:6
function getIndexToIns(arr, num) {
  return arr.sort((a,b) => a-b).reduce((acc,nxt,index) => {
    return nxt < num ? index+1 : acc;
  }, 0);
}

getIndexToIns([40, 60], 50);
