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
       return element.brand === 'Apple' //true or false 값만 리턴
    }
);

console.log('apples', apples);
