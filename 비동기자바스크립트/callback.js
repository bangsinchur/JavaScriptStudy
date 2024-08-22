function printMessageWithParams(func,name){
    console.log('printing message...');
    func(name);
}
function sayHello(name){
    console.log(`Hello ${name}!`);
}

//printMessageWithParams(sayHello('Jake'));// 이렇게하며 오류남
printMessageWithParams(sayHello,'Jake');

printMessageWithParams(()=>console.log('Hello'),'Jake')

console.log('hi')
