// create a function that filters out an array to include
// numbers who only have a certain number of digits.


// function filterDigitLength(arr, num){
//    const result = arr.filter(word => word.length === 3);
//    console.log(result);
// }



function filterDigitLength(arr, num){
let newarr = [];
let length = arr.map(item => {
    if(item.toString().length == num){
        newarr.push(item);
    }
});
console.log(newarr);
}

filterDigitLength([2, 7, 8, 9, 1012], 4)