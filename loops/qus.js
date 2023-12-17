//create a favorite movie game using loops

const favMovie = "kgf";

let guess = prompt("guess my favorite movie");

while((guess!= favMovie) && (guess != "quit")){
    guess = prompt ("wrong guess.plese try again");
}

if (guess == favMovie){
    console.log("congrats!");
}
else{
    console.log("you quite")
}