// TODO: Write code to define and export the Employee class
var Employee = function(name,id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };
  // method which feeds the digitalpal when they are hungry and sets them to sleepy
  Employee.prototype.getName = function() {
      return this.name;
  };
  Employee.prototype.getId = function() {
      return this.id;
  };
  Employee.prototype.getEmail = function() {
      return this.email;
  };
  Employee.prototype.getRole = function() {
      return "Employee";
  };

  module.exports = Employee;