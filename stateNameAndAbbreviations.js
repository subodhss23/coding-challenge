// create a function that filters out an array of state names into
// two categories based on the second parameter.


    function filterStateNames(arr, type){
        if(type === 'abb'){
            let result = arr.filter(elem => elem.length < 3);
            console.log(result);
        } else{
            let result1 = arr.filter(elem => elem.length > 2);
            console.log(result1);
        }
    }

// filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb");
filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full");
