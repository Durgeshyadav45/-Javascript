// Qus1:- Write  an arrow function the square of a number'n'
// const square = n => n*n;
// console.log(square(4));


// Qus2: write a function that prints" Hello World" 5 times at intervals of 2s each.
let id = setInterval(() =>{
    console.log("Hello world");
},2000);

setTimeout(() =>{
  clearInterval(id);

},1000);