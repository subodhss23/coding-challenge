// create a function replaces all the vowels in a string 
// with a specified character.

function replaceVowels(str, ch){
    console.log(str.replace(/[aeiou]/g,ch));
}

replaceVowels('apple', "$");