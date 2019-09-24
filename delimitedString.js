// write a function that turns a comma-delimited list into an 
//array of strings.

function toArray(str){
    if(str.length >= 0){
        console.log(str.split(', '));
    } else {
        console.log([]);
    }
}


// solution using ternary operator
function toArray(str){
    console.log(str.length > 0 ? str.split(', ') : []);
}
toArray("watermelon, raspberry, orange");

