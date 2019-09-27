// create a function that returns true if two arrays
// contain identical values, and false otherwise

function checkEquals(arr1, arr2){
   if(JSON.stringify(arr1) === JSON.stringify(arr2)){
       console.log('true');
   } else {
       console.log('false');
   }
}

// function checkEquals(arr1, arr2){
//     console.log(arr1.toString() === arr2.toString());
// }

checkEquals([1,2],[1,2]);