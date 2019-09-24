/** Create a function that takes three nubmer argument - one number
 * as an input and two additional numbers representing the endpoint 
 * of a closed range - and return the number limited to this range.
 * 
 * 
 * ******* Special Condition ******
 * if the nubmer falls within the range, the number should be returned.
 * 
 * If the number is less than the lower limit of the range, the lower
 * limit should be returned.
 * 
 * If the number is greater than the upper limit of the range, the upper
 * limit should be returned.
 */

 function limitNumber(num, rangeLow, rangeHigh){
     if(num > rangeLow && num < rangeHigh){
         console.log(num);
     } else if ( num < rangeLow ){
         console.log(rangeLow);
     } else if ( num > rangeHigh){
         console.log(rangeHigh);
     } else{
         console.log(num);
     }
 }

 limitNumber(5, 1, 10)
 limitNumber(-3, 1, 10);
 limitNumber(14, 1, 10);
 limitNumber(4.6, 1, 10);
 limitNumber(2,2,2)