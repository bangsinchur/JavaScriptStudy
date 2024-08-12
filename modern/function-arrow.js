const a = function(){
    console.log('hello');
}
a();
// function() → () =>
const b = () => {
    console.log('hello');
}//arrow 함수
b();

const c = number => {
    return number *2;
}

console.log('c(2)', c(2));

const cv2 = number => number * 2;//위에랑 같은값

const d= (a,b) => {
   let z= 4;
    return a +b;
}

const e = (a, b) => a+b;
console.log('e(1,2)',e(1,2));

(() => {
    console.log('Hi')
})();
// 즉시 실행 함수. === (function(){}) ();

