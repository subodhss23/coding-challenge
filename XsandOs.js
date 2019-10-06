/**create a function that takes a string, checks if it
 * has the same number of x's and o's and returns either
 * true or false
 * 
 * Note: Return bool balue,
 *       The string can contain any char,
 *       when no x and no o are in the string, return true
 */

function XO(str) {
    let x = str.toLowerCase().split('').filter(x => x === 'x').length;
    let o = str.toLowerCase().split('').filter(x => x === 'o').length;
    console.log(x === o);
  }

XO('ooxx');