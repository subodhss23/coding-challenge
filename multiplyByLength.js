// create a function to multiply all values in an array by the
// amount of values in that array.


function MultiplyByLength(arr){
    let newarr = arr.map((x) => x * arr.length);
    console.log(newarr);
}

MultiplyByLength([1,2,3,4]);