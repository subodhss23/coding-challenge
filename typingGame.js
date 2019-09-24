/*** You're in the midst of creating a typing game
 * 
 * Create a function that takes in two arrays: the array of user-typed words,
 * and the array of correctly-typed words and outputs an array
 * containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
 * 
 */

 
function correctStream(user, correct) {
	var res = [];
	for (let i = 0; i < user.length; i++) {
		for (let j = 0; i < correct.length; i++) {
			if (user[i].toString() === correct[i].toString()) {
				res.push(1);
			} else {
				res.push(-1);
			}
		}console.log(res);
	}
}


correctStream(["it", "is", "find"], ["it", "is", "fine"]);