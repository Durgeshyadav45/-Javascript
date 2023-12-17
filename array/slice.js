//copies a portion of an array
let cars = ["audi","bmw","xuv","maruti"];
console.log(cars.slice())
console.log(cars.slice(1)) 
console.log(cars.slice(-2))

// splice method

let car = ["audi","bmw", "xuv","maruti","ferrari"];
console.log(car.splice(3))
console.log(car)
console.log(car.splice(0,1))
console.log(car)
console.log(car.push("maruti"))
console.log(car.push("ferrari"))
console.log(car)
console.log(car.splice(0,0,"toyota","tata","mahidra"));
console.log(car)
