/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  
  if (str[0] !== 'a') {
    return undefined;
  }
  
  var position = 0;
  
  for (var i = 97; i < 123; i++) {
    if (str.charCodeAt(position) !== i) {
       return String.fromCharCode(i);
    }
    
    position++;
  }
}

fearNotLetter("abce");

/*
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/
