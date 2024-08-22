function printMessage(func){
    console.log('Printing message...');
func();
}
function sayHello(){
    console.log('Hello world');
}
printMessage(sayHello);

printMessage(
    () => {
        console.log('2Hello World');
    }
);

printMessage(() => console.log('3Hello World'))
