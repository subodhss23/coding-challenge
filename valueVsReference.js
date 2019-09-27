// create a function that returns true if two arrays
// contain identical values, and false otherwise

function checkEquals(arr1, arr2){
   if(JSON.stringify(arr1) === JSON.stringify(arr2)){
       return true;
   } else {
       return false;
   }
}

checkEquals([1,2],[2,1]);