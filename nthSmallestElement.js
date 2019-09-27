// given an unsorted array, create a function that returns the
// nth smallest element(the smallest element is the first, the
// second smallest element is the second smallest, etc)

function nthSmallest(arr, n) {
    arr = arr.sort();
	console.log((arr[n-1]));
}

nthSmallest([1, 3, 5, 7], 1); //1
// nthSmallest([1, 3, 5, 7], 3) // 5