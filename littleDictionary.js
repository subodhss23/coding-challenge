// create a function that takes in an initial word and
// filters out an array to contain words that start with
// the same letters as the initial word.

function dictionary(initial, words){
    console.log(words.filter(w => w.startsWith(initial)));
}

// dictionary('bu', ['brake', 'breakfast', 'border']);
dictionary('there', ['where', 'here', 'everywhere']);
