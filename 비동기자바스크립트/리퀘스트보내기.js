import { getEmployees, getMenus } from './async리퀘스트.js';

const employeesPromise =getEmployees();
const menusPromise =getMenus();
const promise = [];

promise.push(employeesPromise);
promise.push(menusPromise);

const allPromise =Promise.all(promise);
const result =await allPromise;

const employees = result[0];
const menus =result[1];




//promis에 then을 쓴다면
// getEmployees().then(employees =>{
//     console.log('직원 데이터:');
//     console.log(employees);
// })
// // 둘중 응답이 먼저오는애부터 처리됨 
// getMenus().then(menus =>{
//     console.log('메뉴 데이터:');
//     console.log(menus);
// })





// 테스트 코드
console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);
