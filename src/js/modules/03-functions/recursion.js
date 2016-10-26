/**
 * A recursive function (calls itself)
 * to check if a number is even.
 * Safety check for positive number,
 * as a negative number will overflow
 * the stack.
 */
function isEven(number) {
    if(number > -1) {
        if(number === 0) {
            return true;
        } else if(number === 1) {
            return false;
        } else {
            number = number - 2
            return isEven(number)
        }
    } else {
        throw(`${number} is not positive`);
    }
}

function init() {
    console.log(isEven(75));
}

module.exports = {init};
