// create a function that takes in an initial word and
// filters out an array to contain words that start with
// the same letters as the initial word.

function  dictionary(initial, words){
    let arr = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(initial)){
            console.log(words[i]);
            break;
        } else {
            console.log('null');
            break;
        }
    }
}

// dictionary('bu', ['brake', 'breakfast', 'border']);
dictionary('there', [,'where','there', 'here', 'everywhere']);
