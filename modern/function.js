// function 함수값.
const a = 3;
const b = {name : 'Alex'};
const c = function(name){
 console.log('hello' + name);
};
console.log('c', c);
c(' Brown');

const d = {age: 3, name: 'Box',
    hobby: function(){
        console.log('Elden ring');
    }
};
console.log('d',d.name, d.age);
d.hobby();

// 함수 선언
function myFunction(){
    // 함수 표현식 (함수안에 반환하는 함수)
    return function(){
        console.log('Hi?');
    }
};
const f= myFunction();
console.log('f', f);
f();//=== myFunction()(); 같은뜻.
