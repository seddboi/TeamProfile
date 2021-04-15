const Employee = require('../lib/Employee');

describe('Employee', () => {
    it ('should return the name of the employee', () => {
        // Arrange
        const name = 'Gian';
        // Act
        const employee = new Employee(name);
        // Assert
        expect(employee.name).toEqual('Gian');
    });

    it ('should set the id of the employee', () => {
        // Arrange
        const name = 'Gian';
        const id = '69';
        // Act
        const employee = new Employee (name, id);
        // Assert
        expect(employee.id).toEqual(id);
    }); 

    it ('should set the email of the employee', () => {
        //Arrange
        const name = 'Gian';
        const id = '69';
        const email = 'gz2016@att.net';
        // Act
        const employee = new Employee(name, id, email);
        // Assert
        expect(employee.email).toEqual('gz2016@att.net');
    });
});

