// create a function that goes through the array, incrementing(+1)
// for each odd number and decrementing(-1) for each even number

function transform(arr){
    for (let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            arr[i] -= 1;
        } else{
            arr[i] += 1;
        }
    }
    console.log(arr);
}


// solution using ternary operator
function transform(arr){
    for (let i = 0; i < arr.length; i++ ){
        (arr[i] % 2 === 0 ? arr[i] -= 1 : arr[i] += 1)
    }
    console.log(arr);
}
transform([1,2,3,4]);