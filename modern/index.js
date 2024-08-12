const n = 1; // number
console.log('number', n);

const s = 'fighting'; //string
console.log('string', s);

const b = true //boolean;
console.log('boolean', b);

const m = null; // null;
console.log('null', m);

const p = undefined; //undefined;
console.log('undefinde', p);

const a = [1, 2, 3];//array
console.log('array', a);

let a1 = a[1]; // index 1
console.log ('array index 1', a1);
a[1] = 4;
console.log('array index 1 again' , a1);
console.log('array index 1 directly' , a[1]);

const o = {name: 'Alex Lee', age: 1 , smoking: false, undefined, };
console.log('object', o);

const bigInt = 9007199254740993n;
console.log('BigInt', bigInt);
const i2 = 9007199254740995n
console.log('int',  i2);
// 큰 정수를 표현할때 쓴다.

const symbolA = Symbol('this is Symbol');
const symbolB = Symbol('this is Symbol');
console.log(symbolA === symbolB);//false
//symbol은 어떤한 값을 붙여도 true가 될 수 없는 고유한 변수.
const user = Symbol();
const user2 = user;
console.log('comparison', user === user2);//true
//오직 자기 자신만이 true값을 보인다.
//-------------------------------------------------//

