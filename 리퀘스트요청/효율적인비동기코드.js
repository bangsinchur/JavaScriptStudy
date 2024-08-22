//     async function printEmployees() {
//         for (let i=1; i<11;i++){
//         const res = await fetch(`https://learn.codeit.kr/api/employees/${i}`);
//         const data = await res.json();
//         console.log(data);
//         }
// }

// printEmployees();


// async function printEmployee(id) {
//     const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
//     const data = await res.json();
//     console.log(data);
//     }

// for (let i=1; i<11;i++){
//     printEmployee(i);
// }


//async 함수는 항상 promise 를 리턴
// async function getEmployee() {
//     const res = await fetch(`https://learn.codeit.kr/api/employees`);
//     const data =await res.json();
//     return data;
//     }

// const employees =await getEmployee();
// const employee = employees[0]
// console.log(employee);

