const expect = require('expect');
const {Users} = require('./users');

describe('Users' , () => {

    beforeEach(() =>{
        users = new Users();
        users.users = [{
            id : '1',
            name : 'Andrew',
            room : 'Node Course'
        },{
            id : '2',
            name : 'Mead',
            room : 'React Course'
        },
        {
            id : '3',
            name : 'James',
            room : 'Node Course'
        }
        ];
    });

    it('should add new user' ,() => {
        let users = new Users();
        let user = {
            id : '123edszx~',
            name : 'James',
            room : 'Inadequate'
        }

        let resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
        // expect(users.users.length).toBe(1);
        // expect(users.users[0].id).toBe(user.id);
        // expect(users.users[0].name).toBe(user.name);
        // expect(users.users[0].room).toBe(user.room);
    });

    it('should return names for node course' ,() =>{
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Andrew','James']);
    });

    it('should return names for react course' ,() =>{
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Mead']);
    });

    it('should return user for given id' ,() =>{
        let userGet = users.getUser('2');
        expect(userGet).toEqual({
            id : '2',
            name : 'Mead',
            room : 'React Course'
        });
    });
    it('should not return user for invalid id' ,() =>{
        let userGet = users.getUser('22');
        expect(userGet).toBeFalsy();
    });

    it('should return user for given id and remove user' ,() =>{
        let userGet = users.removeUser('2');
        expect(userGet).toEqual({
            id : '2',
            name : 'Mead',
            room : 'React Course'
        });
        expect(users.users.length).toBe(2);
    });


    it('should not remove user for invalid id' ,() =>{
        let userGet = users.removeUser('22');
        expect(userGet).toBeFalsy();
        expect(users.users.length).toBe(3);
    });
})