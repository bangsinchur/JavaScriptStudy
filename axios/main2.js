import { createAvatar } from './api2.js';

try {
  const data = await createAvatar({
    hairType: 'long5',
    hairColor: 'black',
    skin: 'tone100',
    clothes: 'hoodie',
    accessories: 'none',
  });
  console.log(data);
} catch (e) {
  if (e.response) {
   console.log(e.response.status);
    console.log(e.response.data);
  }

  createAvatar({
        hairType: 'long5',
        hairColor: 'black',
        skin: 'tone100',
        clothes: 'hoodie',
        accessories: 'none',
  }).catch(e=>{
    console.log(e.response.status);
    console.log(e.response.data);
  })
};

