function sym(args) {
  
  var array = [];
  
  // push all arguments into array
  for (var i in arguments) {
    array.push(arguments[i]);
  }
  
  // execute the reduce function
  var numbers = array.reduce(function (a, b, c, d) {
    console.log(a);
    return engine(a, d[c]);
  }, []);
  
  // after getting the number array, sort it in order
  return numbers.sort(function(a, b) {
      return a - b;
    });
  }

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

// filter an array if it has repeated number
function filterOut (arr3) {
  var array = [];
  
  for (var i = 0; i < arr3.length; i++) {
    if (array.indexOf(arr3[i]) < 0) {
      array.push(arr3[i]);
    }
  }
  return array;
}

// Symmetric Difference function
function filterOut2 (arr3, arr4) {
  var array = [];
  for (var i = 0; i < arr3.length; i++) {
    if (arr4.indexOf(arr3[i]) < 0) {
      array.push(arr3[i]);
    }
  }
  
  for (var j = 0; j < arr4.length; j++) {
    if (arr3.indexOf(arr4[j]) < 0) {
      array.push(arr4[j]);
    }
  }
  return array;
}

// Function which manages both filters and returns the value
function engine (arr1, arr2) {
  arr1 = filterOut(arr1);
  arr2 = filterOut(arr2);
  return filterOut2(arr1, arr2);
}

