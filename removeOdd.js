// create a function that takes an array of numbers and 
// returns only the even values

function noOdds(arr){
     console.log(arr.filter(x => x % 2 === 0));
}

noOdds([1,2,3,4,5,6,7]);
