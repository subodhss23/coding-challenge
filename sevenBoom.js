// create a function that takes an array of numbers and 
// return "Boom!" if the number 7 appears in the array.
// Otherwise, return "three is no 7 in the array".

function sevenBoom(arr){
    console.log(arr.toString().includes(7) ? 'Boom' : 'there is no 7 in the array');
}
sevenBoom([1,2,3,4,5]);
sevenBoom([1,2,3,4,5,7]);
// sevenBoom([1,2,4,4])