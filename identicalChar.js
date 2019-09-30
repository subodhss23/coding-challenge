// write a function that returns true if all characters in a
// string are identical and false otherwise.

// function isIdentical(s) {
// 	let x = s[0];
// 	for (let i of s) {
// 		if (i !== x) { console.log('false') }
// 	}
// 	console.log('true');
// }


function isIdentical(s){
    let x = s[0];
    for(let i = 0; i < s.length; i++){
        if(s[i] !== x){
            console.log('false');
        }
    }
    console.log('true');
}
 isIdentical('aaaabb');
 
