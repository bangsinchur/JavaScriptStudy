const members = ['타요','봉준','상호','민교'];

// for( member of members){
//     console.log(`${member}님이 입장하셨습니다.`);
// }
// console.log('======================')


members.forEach(function (member,index,arr){
    console.log(`${index} ${member}님이 퇴장하셨습니다.`)

});

// const firstName = ['봉준','타요','상호','민교'];
// const lastName = ['김','안','이','KIM'];

// let fullName = firstName.map( function (firstName,i,arr){
//     return lastName[i] + firstName ;
// }

// )
// console.log(fullName);