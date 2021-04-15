const Intern = require('../lib/Intern');

describe('Intern', () => {
    it ('should apply the school name to the intern', () => {
        // Arrange 
        const name = 'Gian';
        const id = '69';
        const email = 'gz2016@att.net';
        const school = 'UCR';
        // Act
        const intern = new Intern(name, id, email, school);
        // Assert
        expect(intern.school).toEqual('UCR');
    });
});