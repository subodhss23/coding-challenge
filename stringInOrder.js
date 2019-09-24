// create a function that takes a string and returns true or false,
// depending on whether the characters are in order or not.



function isInOrder(str){
    let newarr = str.split('');
    console.log(newarr.sort());
    let sortedArr = newarr.join('');
    console.log(sortedArr);

    if(str === sortedArr){
        console.log('true');
    } else {
        console.log('false');
    }
}

isInOrder("abcdef")
