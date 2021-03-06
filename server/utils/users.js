[{
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
]

class Users{
    constructor(){
        this.users = [];
    }

    addUser(id,name,room){
        let user = {id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id){
        let user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        
        return user;
    }

    getUser(id){
        let user = this.users.filter((user) => user.id === id);

        return user[0];
    }

    getUserList(room){
        let users = this.users.filter((user) => user.room === room);
        let namesArray = users.map((user) => user.name);

        return namesArray;
    }

}

module.exports = {Users};