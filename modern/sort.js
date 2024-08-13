const hangle = ['하하하','다누다','가누다','가나다','나누다','나우리','다하다'];
hangle.sort();
console.log(hangle);

console.log('------------------------------------')
const numbers = [1, 10, 4, 21, 36000];
const dup = numbers.slice();// slice 복사(배열복사)
numbers.sort(
    function(a,b) {
        return a-b;// 오름차순으로 나열
    }
);
console.log('numbers', numbers);
console.log('dup', dup);
numbers.sort((a,b) => b-a);// 내림차순으로 나열
console.log('numbers', numbers);

const letters = ['a','c','b'];
letters.reverse();// 순서를 맞추지 않고 그대로 뒤집는 코드
console.log('letters',letters);
