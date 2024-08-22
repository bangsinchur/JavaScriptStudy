//throw new TypeError('타입 에러가 났습니다.')// 의도적으로 타입에러를 낸것.
//console.log('OK');// 에러가 발생하면 그다음 코드는 진행되지 않음.

// console.log('start-------------------------------')
// try{
// //에러가 날 소지가 있는 코드들... 
// console.log('name', name);
// console.log('try');
// console.log('try again');
// } catch (error){
// console.log('error');
// } finally {
//     console.log('finally');
// }
// console.log('End------------------------------------');

function printMembers(members){
try{
for (const member of members){
    console.log(member);
}
} catch(err){
    console.error(err);
    console.log('-------------------------------')
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해주세요.`)
    console.log('-------------------------------')
}
};


const teamA = ['상호','봉준','민교'];
printMembers(teamA);

const codeit ={name:'codeit'};
printMembers(codeit);
console.log('-------------------------------')
const teamB = ['타요','고토','사장'];
printMembers(teamB);
const teamC = ['뜨뜨','성태','깨박'];
printMembers(teamC);