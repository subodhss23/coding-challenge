// write a function that turns a comma-delimited list into an 
//array of strings.

// function toArray(str) {
// 	if (str === "") {
//         console.log([]);
// 	} 
// 	result = str.split(", ");
// 	console.log(result);
// }


function toArray(str){
    if(str){
        console.log(str.split(', '));
    } else {
        console.log('null');
    }
}
// solution using ternary operator
// function toArray(str){
//     console.log(str.length > 0 ? str.split(', ') : []);
// }
toArray("watermelon, raspberry, orange");
toArray([]);

