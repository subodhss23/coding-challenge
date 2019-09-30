// create a function that returns the product of all
// odd integers in an array.

function oddProduct(arr){
    let product = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] % 2 !== 0){
        //    console.log(arr[i]);
           product = arr[i] * arr[i+2];
        }
    }
    console.log(product);
}

oddProduct([1,2,3,4,5,6,7]);