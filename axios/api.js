import axios from "axios";


const instance = axios.create({
    baseURL: 'https://learn.codeit.kr/api',
    timeout: 3000
})

export async function getAvatars(params = {}) {
    const res = await instance.get('/avatars',{
        params/*만약 파라미터의 이름이 {params}가 아니라 다른이름이면
         {params: 변수이름} 으로 써야한다.*/
    });
    return res.data;
  }
  
  export async function getAvatar(id) {
    const res =await instance.get(`/avatars/${id}`);
        return res.data;
  }
  
  export async function createAvatar(avatarData) {
    const res = await instance.post('/avatars',
        avatarData
       );
    return res.data;
  }
  
  export async function patchAvatar(id, avatarData) {
    const res = await instance.patch(`/avatars/${id}`,
        avatarData 
    );
    return res.data;
  }
  
  export async function deleteAvatar(id) {
    const res = await instance.delete(`/avatars/${id}`);
    return res.data;
  }