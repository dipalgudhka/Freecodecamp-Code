/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var nameArr = firstAndLast.split(/\s/);
    console.log(nameArr);
    this.getFullName = function() {
      return nameArr[0] + " " + nameArr[1];
    };
    this.getFirstName = function() {
      return nameArr[0];
    };
    this.getLastName = function() {
      return nameArr[1];
    };
    this.setFullName = function(str) {
      nameArr = str.split(/\s/);
      // console.log(nameArr);
    };
    this.setFirstName = function(str) {
      nameArr[0] = str;
      // console.log(nameArr);
    };
    this.setLastName = function(str) {
      nameArr[1] = str;
      console.log(nameArr);
    };
};

var bob = new Person('Bob Ross');
// bob.setFullName("Haskell Curry");
bob.getFullName();

/*
Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/
