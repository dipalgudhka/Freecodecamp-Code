/*
This is a pretty basic solution, There are much better ones out there.
But this is what I did.
*/

var vowels = ['a', 'e', 'i', 'o', 'u'];

function translatePigLatin(str) {
  
  var breakdown = [];
  var final = '';
  var counter;
  var breakcounter = 0, decounter = 0;
  
  // determine whether vowels are longer or the sting
  if (str.length > vowels.length) {
    counter = str.length;
  }
  else {
    counter = vowels.length;
  }
  
  // if first letter is a vowel then convert it to pig latin else store all letters in an array
  for (var i = 0; i < counter; i++) {
    if (str[0] == vowels[i]) {
      return str += 'way';
    }
    else {
      breakdown[i] = str[i];
    }
  }
  
  // check how many letters are consonants
  for (var j = 0; j < breakdown.length; j++) {
    if (breakdown[j] !== "a" && breakdown[j] !== "e" && breakdown[j] !== "i" && breakdown[j] !== "o" && breakdown[j] !== "u") {
      if (decounter === 0)
        breakcounter++;
    }
    else {
      decounter++;
    }
  }
  
  // splice, add and join
  var removed = breakdown.splice(0, breakcounter).join('');
  breakdown.push(removed + 'ay');
  final = breakdown.join('');
  
  
  return final;
}


translatePigLatin("glove");

/*
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/
