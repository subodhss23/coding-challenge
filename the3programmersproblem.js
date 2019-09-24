// you hired three programmers and you(hopefully) pay them.
// create a function that takes three numbers(the hourly wage of each programmer)
//and returns the difference between the highest-paid programmer 
// and the lowerst-paid

function programmers(one, two, three){
    let highest = Math.max(one,two, three);
    let lowest = Math.min(one,two,three);
 
    console.log(highest - lowest);
}

programmers(11,22,35);