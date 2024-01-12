// Arrow function

const sum =(a,b)=> {
    console.log(a+b);
};

const cube=(n)=> {
    return n*n*n;
};

// Implicit return
const mul =(a,b) => a*b;
console.log(mul(3,4));


//Set Timeout
console.log("Hi there");

setTimeout(()=>{
    console.log("Durgesh Yadav");
},4000);

console.log("Wellcome to ");



//  This with arrow fnctions 
 const student = {
    name: "aman",
    marks:87,
    prop: this, // global scope
    getName: function(){
        console.log (this);
        return this.name;
    },
    getMarks:() =>{
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(() =>{
            console.log(this); //student
        },2000);
    
    },
    getInfo2:function(){
        setTimeout( function() {
            console.log(this); //window
        },2000);
    },
 };
