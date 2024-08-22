/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. */
const res1 = await fetch('https://learn.codeit.kr/api/avatars')
const ree =await res1.json();
console.log(ree);

/* https://learn.codeit.kr/api/avatars에 GET 리퀘스트를 보내세요. 쿼리 파라미터('?')로 offset을 5, limit을 10으로 설정하세요. */
const res2 = await fetch('https://learn.codeit.kr/api/avatars?offset=5&limit=10')
const ree2 = await res2.json();
console.log(ree2);


/* https://learn.codeit.kr/api/avatars/:id에 GET 리퀘스트를 보내세요. id를 7로 설정하세요. */
const res3 =await fetch( 'https://learn.codeit.kr/api/avatars/7');
const ree3 = await res3.json();
console.log(ree3);

// Promise.all([res1, res2, res3])
// .then(async ([res1, res2, res3]) => {
//   console.log(await res1.json());
//   console.log(await res2.json());
//   console.log(await res3.json());
// });
//프로미스 올 써서 한것.
