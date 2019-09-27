// hamming distance is the number of characters that 
// differ between two string.

function hammingDistance(str1, str2){
    let newarr1 = str1.split('')
    let newarr2 = str2.split('')
    let count = 0;
    
    for(let i = 0; i < newarr1.length; i++){
        if(newarr1[i] !== newarr2[i]){
            count = count + 1;
        } else {
            count;
        }
    }
    console.log(count)
}

hammingDistance("abcde", "bcdef");
hammingDistance("abcde", "abcde");
hammingDistance("strong", "strung");