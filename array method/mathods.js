 // reduces  method
let nums = [1, 2 ,3, 4];
let finalval = nums.reduce((res, el) => {
console.log(res);
return res + el;
});
console.log(finalval);

// maxmum value
// using loop 
 let arr = [1,9,4,2,4,8,6,5,4];
// let max = -1;
// for (let i=0; i < arr.length; i++){
//     if (max < arr[i]){
//     max = arr[i];
//     }
// };
// console.log(max);


let max = arr.reduce((max,el) =>{
    if (max < el){
        return el;
    }
    else{
        return max;
    }
});

console.log(max);


// default perametar
function sum  ( a=2,b){
    return a+b;
}
// console.log(sum(1,3));