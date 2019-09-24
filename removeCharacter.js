// Create a function that removes the first and last characters
// from a string.


//Note
// if the string is 2 or fewer character long, return the string

function removeFirstLast(str){
    if(str.length < 3){
        return str;
    }else{
       let newstr = str.slice(1, str.length - 1);
       console.log(newstr);
    //    console.log(str[str.length - 1]);
    }
}

removeFirstLast('whatisthat?');