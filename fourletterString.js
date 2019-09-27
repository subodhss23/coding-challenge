// create a function that takes an array of string and
// returns the words that are exactly four letters

function isFourLetters(arr){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length === 4){
            newarr.push(arr[i]);
        }
    }
    console.log(newarr);
}

isFourLetters(['what','is','going', 'on', 'here']);