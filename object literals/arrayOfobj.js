// Storing information of multiple students
 const stdInfo=[
    {
        name: "durgesh",
        grade:"A+",
        city: "lucknow",
        course: "mca"
    },
    {
        name:"atul",
        grade: "A",
        city: "lucknow",
        course: "mca"

    },
    {
        name: "amit",
        grade:"O",
        city:"kanpur",
        course:"bca"
    } 
 ]
 console.log(stdInfo);

 // print 0 index 
 console.log(stdInfo[0]);
 console.log(stdInfo[1]);

 // print 1 index name
 console.log(stdInfo[0].name);

 // update city 
 console.log(stdInfo[0].city="delhi");
 console.log(stdInfo[0]);


