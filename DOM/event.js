//on mouseenter
let btn = document.querySelectorAll("button");
for(btn of btn){
    btn.onclick = sayHello();
    btn.onclick = sayName();
    btn.onmouseenter = function(){
        console.log("you entered a butten");

    }
    console.dir(btn);
}
function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Hello");
}
