/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having 
only two divisors, one and itself. For example, 2 is a prime number 
because it's only divisible by one and two.The provided number may 
not be a prime.
*/

function sumPrimes(num) {
  
  if (num < 2) {
    return undefined;
  }
  
  var failed = [], success = [], done = 0;
  
  for (var i = 2; i <= num; i++) {
    for (var j = 2; j < num; j++) {
      if (i % j == 0 && i != j) {
        failed.push(i);
        done = 1;
        break;
      }
    }
    
    if (done == 0) {
      success.push(i);
    }
    else {
      done = 0;
    }
  }
  
  return success.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  
}

sumPrimes(17);

/*
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/
