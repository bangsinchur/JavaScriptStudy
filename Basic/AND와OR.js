//AND(&&) 연산자는 어느한쪽값이라도 false라면 false리턴
//OR(||) 연산자는 어느 한쪽값이라도 true 라면 true 리턴

// <불린값이 아닌 경우>

// AND연산자에서는 왼쪽값이 True 면 오른쪽값 리턴
// 왼쪽값이 flase 면 왼쪽값 그대로 리턴

// OR 연산자에서는 왼쪽값이 True면 왼쪽값 그대로 리턴
// 왼쪽값이 flase면 오른쪽값 리턴

//ex) console.log('codeit' && 'JavaScript') -> JavaScript 리턴
//ex) console.log('hello' || 'codeit') -> hello 리턴

console.log(null && undefined);//null
console.log(0||true);//true
console.log('0' && NaN);//NaN
console.log({} || 123);//{}

//위를 활용한 조건식

function print(value){
    const message = value || 'Codeit';
    console.log(message);
}

print();//codeit 출력
print('javascript');//javascript 출력

//연산식의 순위는 AND연산자가 우선하여 계산된다.