/**
 * Write a range function that takes two arguments,
 * start and end, and returns an array containing all
 * the numbers from start up to (and including) end.
 */

function createRangeArray(start, end) {
    let numberRangeArray = [];

    for(let i = start; i <= end; i++) {
        numberRangeArray.push(i);
    }

    console.log(numberRangeArray);

    getSumOfArray(numberRangeArray);
    getSumOfArrayUsingReduce(numberRangeArray);
}

/**
 * Next, write a sum function that takes an array of
 * numbers and returns the sum of these numbers.
 * Run the previous program and see whether it does indeed return 55.
 */

function getSumOfArray(numberArray) {
    let sum = 0;

    for(let i = 0; i <= numberArray.length; i++) {
        sum += i;
    }

    console.log(sum);
}

// An alternative for sum
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function getSumOfArrayUsingReduce(numberArray) {
    const sum = numberArray.reduce(function(a, b) {
        return a + b;
    }, 0);

    console.log(sum);
}

function init() {
    createRangeArray(1,10);
}

module.exports = {init};
