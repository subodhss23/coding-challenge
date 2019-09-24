// create a function that takes a number (from 1-60) and 
// returns a corresponding string of hyphens


// 1. solution using in built .repeat method
function Go(num){
    let h = '-';
    let string = h.repeat(num);
    console.log(string);
}

// 2. solution using repeat method as well
function Go(num){
    console.log ('-'.repeat(num));
}

// 3. solution using for loop 
function Go(num){
    str = '';
    for(let i = 0; i < num; i++){
        str += '-';
    }
    console.log(str);
}

Go(5);