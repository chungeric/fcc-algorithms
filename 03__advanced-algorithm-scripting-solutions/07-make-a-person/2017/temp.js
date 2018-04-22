var Person = function(firstAndLast) {
  var firstName = firstAndLast.split(" ")[0];
  var lastName = firstAndLast.split(" ")[1];
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + " " + lastName;
  };
  this.setLastName = function(last) {
    lastName = last;
    fullName = firstName + " " + last;
  };
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
