// given an unsorted array, create a function that returns the
// nth smallest element(the smallest element is the first, the
// second smallest element is the second smallest, etc)

function nthSmallest(arr, n) {
    arr = arr.sort();
    if(n <= arr.length ){
        console.log((arr[n-1]));
    } else {
        console.log('null');
    }
	
}

nthSmallest([1, 3, 5, 7], 4); //1
// nthSmallest([1, 3, 5, 7], 3) // 5