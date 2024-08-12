function sayHi(){
    console.log('this in function', this);
}

sayHi();

const user = {
    firstName: 'tess',
    lastName: 'Jang',
    getFullName: function(){
        return `${user.firstName} ${user.lastName}`;
    },
};

console.log(user.getFullName());
console.log(user.firstName);

const user2 ={
    firstName: 'Alex',
    lastName: 'Lee',
    getFullName: () => {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(user2.getFullName());
console.log('-------------------------');

function printThis() {
    console.log(this.content);
}

const myObj = {
    content: 'Alex Lee',
    printContent: printThis,
};

myObj.printContent();
const otherObj = {
    content: 'Codeit',
    age: 7,
    printContent: printThis,
};

otherObj.printContent();
printThis();//undefined
