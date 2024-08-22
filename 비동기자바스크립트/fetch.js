// const response =await fetch('https://learn.codeit.kr/api/menus')

// //Promise 프라미스(프로미스) pending 걸려있다. 진행중.끝난거아니다.
// //서버를 갔다 오는데 시간이 걸린다.
// //서버에서 응답이 올때까지 기다리지 않는다.!
// const data = await response.json();
// console.log(data);

// import { printMenus } from "./asyncFunctions.js";
// console.log('Printing Menus:');

// await printMenus();

// console.log('Finished')

import {getMenus} from './asyncFunctions.js';

function getRandomElement(arr) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}

console.log('메뉴 고르는 중...');

const menu=getRandomElement(await getMenus())




console.log(`오늘의 랜덤메뉴는 <${menu.name}>입니다.!`);