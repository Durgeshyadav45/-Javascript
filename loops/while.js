/* while (condition ){
    //do something
 } */

 let i=1;

 while (i<=5){
    console.log(i);
    i++
 }

 //print 0 to 20 number
let j=0;

while(j<=20){
    console.log(j);
    j++;
}
 

// loop with Array
/*let fruits = ["mango","apple","banana", "litchi","orange"];
fruits.push("pineapple");
console.log(fruits);

for (let i=0; i<fruits.length; i++){
    console.log(i,fruits[i]);
}*/


//nested loop with nested array
let  heroes =[
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flase"],
    
]

for (let i=0; i<heroes.length;i++){
    console.log(i, heroes[i],heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log('j=$(j), ${heroes[i][j]}');
    }
}