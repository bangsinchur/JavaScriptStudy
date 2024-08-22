// getAvatar's' -> 복수형태 RESTful avatars: 목록
export async function getAvatars(params = {}) {
    const url = new URL('https://learn.codeit.kr/api/avatars');
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  // getAvatar 단수 id : avatar/숫자
  export async function getAvatar(id) {
    const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
    const data = await res.json();
    return data;
  }

  // avatars -> 복수 : 신규생성
  export async function createAvatar(avatarData) {
    const res = await fetch('https://learn.codeit.kr/api/avatars', {
      method: 'POST',
      body: JSON.stringify(avatarData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }
  
  // 단수 : singlular
  export async function patchAvatar(id, avatarData) {
    const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`,{
        method: 'PATCH',
        body: JSON.stringify(avatarData),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        const data = await res.json();
    return data;
  }
  // 단수
  export async function deleteAvatar(id) {
    const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`,{
        method: 'DELETE'    
    });
    const data = await res.json();
    return data;
  }