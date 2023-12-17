//Que1: for the given start of an array ,change it to final form using splice

 start: ["january", "july", "march", "august" ];
 final: ["july", "june","march","august"];

//Qus2: return the index of the "javascript" from the given, if it was reversed.
 ["c", "c++", "html","javascrpt","python","java", "sql"]; 
 

 //Ans1
 let months = ["january", "july", "march", "august" ];
 console.log(months.splice(0,2, "july","june"))
 console.log(months)

 //Ans2
 let lang = ["c", "c++", "html","javascript","python","java", "sql"];
 console.log(lang.reverse())
 console.log(lang.indexOf("javascript")) //javascript reversed order index 3

