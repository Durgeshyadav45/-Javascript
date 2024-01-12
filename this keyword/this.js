
const student = {
    name:"durgesh",
    age: 21,
    eng: 80,
    math: 85,
    phy:65,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.mat + this.phy)/3;
        console.log('${this.name} got avg marks = ${avg}');
    }
}


