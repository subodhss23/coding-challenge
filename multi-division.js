// create a function, that will for a given a,b,c do the following
// -> add a to iteself b times
// -> chech if the result is divisible by c


function abcmath(a, b, c){
    const abcmath = (a, b, c) => (a * Math.pow(2, b)) % c === 0;
}