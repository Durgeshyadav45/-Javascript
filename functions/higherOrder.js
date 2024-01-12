
function multipleGreet(func, count){  // Higher order function
    for (let i=1; i<=count; i++){
        func();
    } 
}


let greet = function(){
    console.log("hello");
}

multipleGreet(greet,2);



// Qus: Returns a function: (even number and odd number return)

function oddOrEvenFactory(request){
    if (request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if (request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
        return even;
    }  

    else{
        console.log("wrong information")
    }
}

let request = "odd"; //even

