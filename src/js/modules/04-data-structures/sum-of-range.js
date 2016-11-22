/**
 * Write a range function that takes two arguments,
 * start and end, and returns an array containing all
 * the numbers from start up to (and including) end.
 */

function createRangeArray(start, end, step) {
    step = step || 1;
    let numberRangeArray = [];

    if (start >= end) {
        for (let i = start; i >= end; i += step) {
            numberRangeArray.push(i);
        }
    } else {
        for(let i = start; i <= end; i += step) {
            numberRangeArray.push(i);
        }
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

    for(let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
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

/**
 * As a bonus assignment, modify your range function
 * to take an optional third argument that indicates
 * the “step” value used to build up the array.
 * If no step is given, the array elements go up by
 * increments of one, corresponding to the old behavior.
 * The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
 * Make sure it also works with negative step values so that
 * range(5, 2, -1) produces [5, 4, 3, 2].
 *
 * See modified createRangeArray function above.
 */

function init() {
    createRangeArray(5,10);
    createRangeArray(10, 1, -2);
}

module.exports = {init};
