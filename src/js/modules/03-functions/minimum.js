/**
 * Write a function min that takes two
 * arguments and returns their minimum.
 */

function min(num1, num2) {
    if(num1 === num2) {
        return;
    } else if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

function init() {
    console.log(min(0, 10));
    console.log(min(0, -10));
}


module.exports = {init}
