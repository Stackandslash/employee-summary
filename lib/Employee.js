// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
  };
  // method which feeds the digitalpal when they are hungry and sets them to sleepy
  getName() {
      return this.name;
  };
  getId() {
      return this.id;
  };
  getEmail() {
      return this.email;
  };
  getRole() {
      return "Employee";
  };
}

  module.exports = Employee;