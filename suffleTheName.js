// create a function that accpets a string(of a person first
// and last name) and returns a string with the first and last
// name swapped.

function nameShuffle(str){
    let newarr = (str.split(' ').reverse()).join(' ');
    console.log(newarr);
}

nameShuffle("Donald Trump")
