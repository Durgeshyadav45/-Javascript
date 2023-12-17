console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

// using for loop 
for(let i=1; i<=5; i++){
    console.log(i);
}

//Qus1:- Print all odd numbers(1 to 15) 
for (let i=1; i<=15; i=i+2){
    console.log(i);
}

//backword
for(let i=15; i>=1; i=i-2){
    console.log(i);
}

//Qus2:- Print all even number (2 to 50)
for(let i=2; i<=50; i=i+2){
    console.log(i);
}

// print table
let n=prompt("write your number");
n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}