// create a function that repeats each character in a 
// string n time

function repeating(str, n){
    let newarr = "";
    for(let i = 0; i < str.length; i++){
      newarr = newarr + str[i].repeat(n);
 }
 console.log(newarr);
}

repeating('what', 3);