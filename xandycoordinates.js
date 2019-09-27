// create a function that converts two array of x- and y-
// coordinates into an array of (x,y) coordinates.

// function convertCartesian(x,y){
//       let newarr = [];
//       for (let i = 0; i < x.length; i++){
//           let newarray = [];
//           newarray.push(x[i], y[i]);
//           newarr.push(newarray);
//       } 
//       console.log(newarr);
// }


//es6 solution
function convertCartesian(x, y){
    console.log(x.map((a, b) => [a, y[b]]));
}

convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]);