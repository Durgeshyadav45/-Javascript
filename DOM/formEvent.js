//Form Event
let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("form submited");
//     alert("form submitted");
// });


// Extracting Form Data
 form.addEventListener("submit",function (event) {
  event.preventDefault();
//   console.dir(form);

//   let user = this.elements[0];
//   let pass = this.elements[1];
//   // console.log(user.value);
//   // console.log(pass.value);

//   alert('hi ${user.value}, your password is to set to{pass.valu}');

 });


// Chaneg Event 
let user= document.querySelector("#user");

user.addEventListener("change", function(){
  console.log("input changed");
  console.log("final value=" , this.value);

})


//input event

user.addEventListener("input", function(){
  console.log("input changed");
  console.log("final value=" , this.value);
});