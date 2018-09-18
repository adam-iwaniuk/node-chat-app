const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });
    it('should add new user', () => {
       var users = new Users();
       var user = {
           id: '123',
           name: 'Adam',
           room: 'Office fan'
       };
       var resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var deletedUser = users.removeUser('2');
        expect(deletedUser).toEqual({
            id: '2',
            name: 'Jen',
            room: 'React Course'
        });
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var deletedUser = users.removeUser('2445');
        expect(deletedUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var foundUser = users.getUser('2');
        expect(foundUser).toEqual({
            id: '2',
            name: 'Jen',
            room: 'React Course'
        });
    });

    it('should not find user', () => {
        var foundUser = users.getUser('2445');
        expect(foundUser).toNotExist();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});