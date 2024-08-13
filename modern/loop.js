const numbers = [1,2,3];
let sum = 0;
// forEach : higher order function 고차함수
numbers.forEach(
    //callback
    function(element, index, array){
  //      console.log(element,index,array);
    sum += element
    }
);
console.log('sum', sum);
sum = 0;
 numbers.forEach(
    (_,index) => {
        sum += index;
    }// 두번째 값 index만 필요할때 앞의값을 (_,)로 넘어갈수 있음.
);
console.log('sum', sum);


// map

const twiceNumbers = numbers.map(
    (element,index,array) => {
        return element * 2;
    }
);
// reutrn 을 지우고 element 만 남겨서 괄호하고 return을 지울수 있다.

console.log('tn', twiceNumbers);

// filter

const devices = [
    {name: 'GalaxyNote', brand: 'Samsung'},
    {name: 'MacbookPro', brand: 'Apple'},
    {name: 'Gram', brand: 'LG'},
    {name: 'MacbookAir', brand:'Apple'},
];

const apples = devices.filter(
    (element,index) => {
     console.log('index', index);   
       return element.brand === 'LG' //true or false 값만 리턴
    }
);

console.log('apples', apples);


















