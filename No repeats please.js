/*
I made this algorithm in a diffrent way. 
It was one of the most challenging things to do.
*/
var test;

/*
This function is where all other functions are executed
*/
function permAlone(str) {
  var makeArr = [], counter = 0;

  for (var i in str) {
    makeArr.push(str[i]);
  }
  
  test = makeArr.slice(0);
  
  while (counter < str.length - 1) {
    // console.log(makeArr);
    makeArr = makePerms(makeArr);
    counter++;
  }
  
  var regex = /(.)\1+/g;

  var filter = makeArr.filter(function(string) {
  return !string.match(regex);
  });
  
  return filter.length;
}

/*
We call permAlone with a string
*/
permAlone("aba");

/*
This function generates the permutations for each new array
*/
function makePerms(arr) {
  var newArr = [];
  
  for (var j in arr) {
    var array = test.slice(0);
  
    var toJoin = remains(arr[j], array);
    
    for (var k = 0; k < toJoin.length; k++) {
      newArr.push(arr[j] + toJoin[k]);
    }
  }

  return newArr;
}

/*
This function generates the remaining strings to be added into the makePerms string
*/
function remains(string, arr) {
  var array = [];
  for (var j in string) {
    array.push(string[j]);
  }
  
  for (var i in array) {
    var pos = arr.indexOf(array[i]);

    if (pos >= 0) {
      arr.splice(pos, 1);
    }
  }
  var newArr = arr.slice(0);

  return newArr;
}
