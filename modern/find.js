const devices = [
    {name: 'GalaxyNote', brand: 'Samsung'},
    {name: 'MacbookPro', brand: 'Apple'},
    {name: 'Gram', brand: 'LG'},
    {name: 'MacbookAir', brand:'Apple'},
];

const myLaptop = devices.find(
    (element, index,array) =>{
        console.log('index', index);
        return element.brand ==='Apple';
    }
);

console.log('mine', myLaptop);
//Apple에 해당되는 맨처음 한개값만 나옴
//두개의 값을 다 찾으려면 fillter를 써야함.
//단,fillter는 index값은 해당 배열값 모두가 나옴.
// index는 return값에 맞는 조건을 찾을때 멈춘다.
console.log('--------some,every----------------------');
// some : 조건을 만족하는 요소가 1개이상 있는지
//every : 모든 요소가 조건을 만족하는지

const numbers = [1,3,5,7,9];

const someReturn = numbers.some(
    (element,index,array)=> {
    console.log('index', index);
    return element !== 5;
});// index는 return값에 맞는 조건을 찾을때 멈춘다.
console.log('some',someReturn);

const everyReturn = numbers.every((element, index, array)=>{
    console.log('index', index);
    return element > 5;
}
);
console.log('every', everyReturn);
//5보다 작은 값이 있으면 false가 나옴
//true 로 만들려면 5보다 큰값을 배열에 넣으면 됨.
console.log('------------------------------');
