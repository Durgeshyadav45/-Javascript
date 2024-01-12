// spread with array literals
let arr=[1, 3, 4, 6, 7];
console.log(...arr);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even] ;
console.log(nums);


// with Object leterals
 const data ={
    email: "iranman@gmail.com",
    password: "asdf",

 };
  const dataCopy={...data, id:123,country:"india"};
  console.log(dataCopy);



  // Destructuring:
  let names = ["tony", "peter", "amit", "steve", "atul", "durgesh"]
//   let winnar = names[0];
//   let runnerup = names[1];
//   let secondRunner = names[2];
//   console.log(names[0]);
 let[winnar, runnerup,...others] = names;
 console.log(others);