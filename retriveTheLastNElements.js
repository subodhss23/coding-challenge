// write a function that retrives the last n elements from 
// an array.

// NOTE
// -> Return invalid if n exceeds the length of the array.
// -> Return an empty array if n == 0

function last(a, n){
    let emptyArray = [];
    // if(n === 0) console.log(emptyArray);
    if(n > a.length) console.log('invalid');
    else{
       let newarr = [];
       newarr = a.slice(a.length - n, a.length);
       console.log(newarr);
    }
}

last([1, 2, 3, 4, 5], 0);
last([5, 6, 7, 3, 2, 1], 3);
last([], 1);
last([1, 2, 3, 4, 5], 7);