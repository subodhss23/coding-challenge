// filter out empty arrays from an array. 


// fix the incorrect part of the code so that all tests are passed!



function removeEmptyArray(arr){
 console.log(arr.filter(x => x.length !== 0));
}


// comparing type
function removeEmptyArray(arr){
    console.log(arr.filter(x => x != false));
}

removeEmptyArray([1,2,[],4]);