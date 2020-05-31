// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        //methods
        Manager.prototype.getRole = function() {
            return "Manager";
        };
        //For this, the README for the homework itself does not list a function to retrieve the office number. However, the test name states that it attempts to get this variable via getOffice(). That said, it does not use that name, and instead uses getOfficeNumber().
        Manager.prototype.getOfficeNumber = function() {
            return officeNumber;
        };
    }
};




module.exports = Manager;