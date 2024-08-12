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
