const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should set the resident office number of the manager', () => {
        // Arrange
        const name = 'Gian';
        const id = '69';
        const email = 'gz2016@att.net';        
        const officeNumber = '20132';
        // Act
        const manager = new Manager(name, id, email, officeNumber);
        // Assert
        expect(manager.officeNumber).toEqual(officeNumber);
    });
});