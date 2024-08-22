// 밖에서 쓰고 싶어서 export
// 함수 본문 안에 await이 있어서 async
//함수니까 function
//printMenus는 함수 이름
// export async function printMenus () {
//     const response =await fetch('https://learn.codeit.kr/api/menus')
//     const data = await response.json();
//     console.log(data);
// }

export async function getMenus(params) {
    const response= await fetch('https://learn.codeit.kr/api/menus');
    const menus = await response.json();
    return menus;
}

