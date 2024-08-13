const numbers = [1,2,3,4];
let sum =0;
numbers.forEach(element => {
    sum += element;
})
console.log('sum', sum);

const sumAll=numbers.reduce(
    (accumulator,element,index,array) =>{
        console.log('어큐물레이터', accumulator);
        return accumulator + element;
    },0 // 0은 accumulator 초기값 
    );

    console.log(sumAll);
console.log('--------------factorial----------------')
const factor = numbers.reduce(
    (accumulator,element,index,array) =>{
        return accumulator * element;
    }, 1);
console.log(factor);

function factorial(numbers){
    let product =1;
    for (number of numbers) {
        product *= number;
    }
    return product;
}

console.log('ff' , factorial(numbers));
