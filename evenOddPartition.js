// write a function that partitions the array into two subarrays:
// one with all even integers, and the other with all odd integers.
// Return your result in the following format:
// [[evens], [odd]]

function evenOddPartition(arr){
    var oddarr = [];
    var evenarr = [];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            evenarr.push(arr[i]);
        }
        else {
            oddarr.push(arr[i]);
        }
    }
  let newarr = [evenarr, oddarr];
  console.log(newarr);
}

evenOddPartition([1,2,3,4]);
