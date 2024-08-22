function sayHi(name =' codeit'){
    console.log('Hi' + name);
}
sayHi(' Alex');
sayHi();
function printArguments (){
for (const argument of arguments){
    console.log('arg', argument);
}
}


function printArgumentsV2(...args){
    for (const arg of args){
        console.log('arg2', arg)
    }
}

function printRankingList(first, second, ...others){
    console.log('first', first);
    console.log('second', second);
    console.log('others', others);
    for(const other of others){
        console.log('other', other);
    }
}
// for of 문 다시보고 생각해보기
printArgumentsV2(1,2,3);
printArguments(1,2,3);
printRankingList('Alex','James', 'Brown','grey','giga');

console.log('-=======================================-')

//for of 반복문
// for (변수 of 배열 ) {
//     동작부분;}
let influencer = ['봉준','타요','상호','민교'];

for (let i=0; i<influencer.length; i++){
    console.log(influencer[i]);
};

console.log('-=======================================-')

for ( element of influencer){
    console.log(element);
};

console.log('-=======================================-')

for (el2 in influencer){
    console.log(influencer[el2]);
    //console.log(el2);를 하면 index값인 0,1,2,3 이나옴
    //그래서 influencer의 배열값을 직접 찾아야하기때문에
    //influencer[0],...influencer[3]값까지 쳐서 
    //해당 배열의 값으로 출력해야함.
};

// 셋다 같은 방식.