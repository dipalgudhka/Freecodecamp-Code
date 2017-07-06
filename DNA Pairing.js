/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results
as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array. For example, for the input GCG, return
[["G", "C"], ["C","G"],["G", "C"]]. The character and its pair are paired up in an array, and all the arrays
are grouped into one encapsulating array.
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
