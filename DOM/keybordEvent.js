// key bord

// keydon 
let inp = document.querySelector("input")
inp =addEventListener("keydown", function(event){
 console.log("code = ", event.code);// Arrowup, ArrowDown,ArrowLeft, ArrowRight
 if(event.code == "keyU"){
    console.log("character moves up");
 }
 else if(event.code == "keyD"){
    console.log(" character moves down");
 }
 else if (event.code==" keyL"){
    console.log("character moves left")
 }
 else if (event.code == "keyR"){
    console.log("characte moves right")
 }

});

// let inp = document.querySelector("input")
// inp =addEventListener("keyup", function(){
//     console.log("key was presed");
// });


