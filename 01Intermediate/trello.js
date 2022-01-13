
// const array = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']; 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }



const myTodos = [];

myTodos.push('buy bread');
myTodos.push('homework');
myTodos.push('hit gym');

myTodos.forEach(element => {
    console.log(element);
});

for (let i = myTodos.length - 1; i >= 0; i--) {
    console.log(myTodos[i]);
    
}