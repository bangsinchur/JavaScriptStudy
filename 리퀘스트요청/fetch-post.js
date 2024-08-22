const avatarData = {
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds',
};

console.log('avatarJSONString', JSON.stringify(avatarData));
// 여기에 코드를 작성하세요.

const res =await fetch('https://learn.codeit.kr/api/avatars', { 
  method: 'POST' ,
  body: JSON.stringify(avatarData),
  headers: {
    'Content-Type': 'application/json',
  },
});
const data = await res.json();
console.log('data',data);

/*
Promise.all([res1, res2, res3])
.then(ress => ress.map(res => res.json()))
.then(async (ress) => {
  ress.forEach(async res => console.log(await res))
});
*/
