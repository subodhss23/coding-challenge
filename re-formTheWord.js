// a word has been split into a left part and a right part. Re-form the
// word by adding both halves together, changing the first character
// to an uppercase letter.

function getWord(left, right){
   let newWord = left + right;
   console.log(newWord.charAt(0).toUpperCase() + newWord.slice(1));
}

getWord('subodh', 'sharma');