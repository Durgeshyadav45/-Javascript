// Check if all numbers in our array are multiples of 10 or not

// let nums = [10, 20, 30, 40];
// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);


//Qus2: Create a function to find the min number in an array
let nums =[3,7,9,5,9];
function getMin(nums){
    let min = nums.reduce((min,el) =>{
        if (min < el){
            return min;
        }
        else{
            return el;
    
        }
    });
    return min;

}
 

 console.log(min);
