// Qus: what will be the output

let greet = "hello"; // globle scope

function changGreet(){
    let greet = "namaste"; // function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet); // laxical scope
    }
    innerGreet();
}
console.log(greet);
changGreet();

 