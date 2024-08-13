const members = new Set();

members.add('봉준');
members.add('타요');
members.add('상호');

console.log(members.has('상호'));
console.log(members.has('민교'));
console.log(members.size);

//집합(set)은 인덱스 개념이 없다.

members.delete('상호');
console.log(members.size);

// members.clear();
// console.log(members.size);

for( const member of members) {
    console.log(member);
}

members.forEach(member =>{
    console.log(member);
});

const numbers = [1,3,4,3,3,3,3,5,2,1,4];
console.log('numbers',numbers);
const uniqueNumbers = new Set(numbers);
console.log('uN', uniqueNumbers);//집합(set)은 중복이 없다{1,3,4,5,2}
