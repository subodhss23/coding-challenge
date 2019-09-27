// write a function that returns true if the product of an
// array is divisible by the sum of that same array.

function divisible(arr){
    var product = 1;
    var sum = 0;
    for(let i = 0; i < arr.length; i++){

        product = product * arr[i];
        sum = sum + arr[i];
       
    }if ( product % sum === 0){
        console.log('true');
    } else {
        console.log('false');
    }
}

divisible([3, 5, 1]);
divisible([10, 5, 10]);
divisible([1, 1, 1, 1, 10]);
