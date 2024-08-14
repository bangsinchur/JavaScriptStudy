//index.html의 p요소를 얻어오고 싶다.
//const pElement = document.getElementsByTagName('p')[0];
//getElementsByTagName('p')[0]->인덱싱 값을빼면 유사배열이 나온다.
const pElement = document.querySelector('p');
console.log(pElement) // p요소인 <p>click me!</p>가 나온다.
pElement.addEventListener('click', function(e) {
    console.log(e);
})

window.addEventListener('scroll', function(event){
    console.log(event)
})