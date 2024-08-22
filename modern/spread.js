const webPublishing = ['HTML', 'CSS'];
console.log('wP', typeof webPublishing);
const interactiveWeb = [...webPublishing, 'JS'];
console.log('iW', interactiveWeb);

let iw2= ['JS'];
// unrolling (no loop)
//iw2.unshift('CSS');
//iw2.unshift('HTML');

for (let i=webPublishing.length - 1; i>=0; i--){
    iw2. unshift(webPublishing[i]);
}
console.log('iw2',iw2);
console.log(webPublishing.length);// 값 2

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log('arr3',arr3);
//spread array ->into array
//spread array into object

const members = ['Jay','Kay','El'];
const newObject = { ...members};

console.log('nO', newObject);
// spread object into array No

const getAge=function () {
    const date = new Date();
    return date.getFullYear() - this.birth + 1;
  }
  
  const user = {
    getAge,
    name: 'codeit',
    birth: 2017, };  
    
    console.log(user)
    const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};
