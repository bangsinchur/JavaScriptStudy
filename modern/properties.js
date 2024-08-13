const user = {
    name: 'Alex',
    age: 3,
};
console.log('user name', user.name);
console.log('user [name]', user ['name']);

const name = 'Alex';
const age = 3;

const user2 = {
    name: name,
    age: age,
};

console.log('user2', user2);

const user3 = {
    name,
    age,
};

console.log('user3', user3);

const user4 = {
    firstName: 'Alex',
    lastName: 'Lee',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log('user4 full name', user4.getFullName());