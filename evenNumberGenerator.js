// create a function that finds all even numbers from 1
// to the given number


function findEvenNums(num){
    var even = [];
      for (let i = 1; i <= num; i++){
          if(i % 2 === 0){
                   even.push(i);
          }
  }
  console.log(even);
}


findEvenNums(8);
findEvenNums(3);