// Create a function that takes in an array(slot machine outcome)
// and returns true if all elements in the array are identical,
// false otherwise. The array will contain 4 elements.

function testJackpot(result){
    let i = 0;
    if(result[i] === result[i+1] && result[i+1] === result[i+2] && result[i+2] === result[i+3]){
       console.log('true')
    } else{
        console.log('false');
    }
}

testJackpot([1,1,1,1]);

