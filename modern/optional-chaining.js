function printCatName(user){
    //console.log(user.cat && user.cat.name);
    console.log(user.cat?.name);
    
}

const user1 = {
    name: 'Alex',
    cat: {
        name: 'Crew',
        breed: 'British Shortair'
    }
}

printCatName(user1);

const user2 = {
    name: 'jay'
}

console.log('user2 cat', user2.cat);
printCatName(user2)
//pre-condition
// if (user2.cat){
// printCatName(user2);
// };

// try{
//     printCatName(user2);
// }catch (e){

// };