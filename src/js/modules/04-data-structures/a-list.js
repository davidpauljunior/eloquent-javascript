/**
 * A list is a nested set of objects,
 * with the first object holding a reference
 * to the second, the second object holding
 * a reference to the third, and so on.
 *
 * Write a function arrayToList that builds up
 * a data structure like the previous one when
 * given [1, 2, 3] as an argument, and write a
 * listToArray function that produces an array
 * from a list.
 */

function arrayToList(array) {
    // needs to build data-structure
    let list = null;

    // loop through array starting
    // from the end and working backwards

    // create an object called 'list' with a
    // property called 'value', and assign
    // to it the element in the array.
    // The other property, "rest" will be
    // assigned the value of the variable 'list'.
    // As this is a loop, this will become a nested
    // object with the "value" changing as you
    // go through the array.
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }

    return list;
}

function listToArray(obj) {
    let array = [];

    // a loop that for each iteration, "i"
    // points to the current sublist.
    // The middle condition checks whether i is truthy.
    // If i.rest becomes null, then i will be false
    // and the loop will end.
    // So long as the value of i.rest is something truthy,
    // it will keep looping through.
    for (let i = obj; i; i = i.rest) {
        array.push(i.value);
    }

    return array;
}


/**
 * Also write the helper functions prepend, which
 * takes an element and a list and creates a new
 * list that adds the element to the front of the
 * input list, and nth, which takes a list and a
 * number and returns the element at the given position
 * in the list, or undefined when there is no such element.
 *
 * If you haven’t already, also write a recursive version of nth.
 */

function prepend(value, list) {
  return {value: value, rest: list};
}

// Takes a list and a number
// and returns the element at the
// given position in the list,
// or undefined where there's no
// such element.

// It goes through the list,
// if n is 0, it returns the value
// otherwise it calls the function again
// with the next nested object (list.rest)
// and subtracts 1 off of n.
// So when n gets down to 0,
// you'll be x levels deep into
// the nested object, at which points
// return the value.
// http://stackoverflow.com/questions/31804231/why-does-this-eloquent-javascript-recursive-solution-work
function nth(list, number) {
    if (!list) {
        return undefined;
    } else if (number === 0) {
        return list.value;
    } else {
        return nth(list.rest, number - 1); // The list.rest being passed is the key to this whole recursion!
    }
}

function init() {
    console.log(arrayToList([10, 20, 30, 40]));
    console.log(listToArray(arrayToList([10, 20, 30, 40]))); // converts array to list and then back again.
    console.log(prepend(10, prepend(20, null)));
    console.log(nth(arrayToList([10, 20, 30, 40]), 3));
}

module.exports = {init};
