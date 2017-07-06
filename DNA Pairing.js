/*
Short & Sweet
*/

function pairElement(str) {
  var array = str.split('');
  var arr1, arr = [];
  
  for (var i = 0; i < array.length; i++) {
    arr1 = pairing(array[i]);
    arr.push(arr1);
  }
  
  return arr;
}

// make a function which outputs the pair as an array
function pairing(letter) {
  var arr = [];
  
  if (letter == 'G') {
    arr = ['G', 'C'];
  }
  else if (letter == 'C') {
    arr = ['C', 'G'];
  }
  else if (letter == 'T') {
    arr = ['T', 'A'];
  }
  else if (letter == 'A') {
    arr = ['A', 'T'];
  }
  
  return arr;
}

pairElement("GCG");

/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
