// create a function that takes an array of students and 
// return an array of student names.


function getStudentNames(students){
    console.log(students.map((a) => a.name));
}

function getStudentNames(students) {
	return students.map(function(x){
		return x.name;
	})
}


getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ])

