// create a function that takes a string and returns a string
// with its letters in alplabetical order

function AlphabetSoup(str){
let newstr = str.split('').reverse().sort().join('');
console.log(newstr);

}

AlphabetSoup('cat');
AlphabetSoup('isthisworking?');
AlphabetSoup('reverseme');