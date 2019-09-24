// Sam and Frodo need to be close. If they are side by side
// in the array, your function should return true. If there
// is a name between them, return false.

function middleEarth(arr){
    for(let i = 0; i < arr.length - 1 ; i++){
        if(arr[i] === "Sam" && arr[i+1] === "Frodo" || arr[i] === "Frodo" && arr[i+1] === "Sam"){
            console.log('true');
        } 
    }
 console.log('false'); 
}

middleEarth(['Sam', 'Frodo', 'Saruman']);
middleEarth(['Orc', 'Frodo', 'Legolas', 'Sam']);
