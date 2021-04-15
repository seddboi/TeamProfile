const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should set the Github username for the engineer', () => {
        // Arrange
        const name = 'Gian';
        const id = '69';
        const email = 'gz2016@att.net'; 
        const github = 'Seddboi';
        // Act 
        const engineer = new Engineer(name, id, email, github);
        // Assert
        expect(engineer.github).toEqual('Seddboi');
    })
})