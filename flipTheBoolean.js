// create a function that reverse a boolean value and
// returns the string "boolean expected" if another 
// type is give.

function reverse(bool){
    if(bool === true || bool === false){
        if(bool = true)
            console.log('false');
        else{
            console.log('true')
        }
    } else{
        console.log('boolean expected');
    }
}

reverse('false');
reverse(0);
