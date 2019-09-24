// create a function that takes a number (from 1-60) and 
// returns a corresponding string of hyphens

function Go(num){
    let h = '-';
    let string = h.repeat(num);
    console.log(string);
    console.log(typeof(string));
}

Go(22);