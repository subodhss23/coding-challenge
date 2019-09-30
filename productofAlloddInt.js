// create a function that returns the product of all
// odd integers in an array.

function oddProduct(arr){
    let product = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            product = product * arr[i];
        }
    }
    console.log(product);
}

oddProduct([1,2,3,3,4,5]);
oddProduct([1, 2, 2, 5, 2, 0]);
oddProduct([0, 0, 0, 1]);