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
 *
 * Also write the helper functions prepend, which
 * takes an element and a list and creates a new
 * list that adds the element to the front of the
 * input list, and nth, which takes a list and a
 * number and returns the element at the given position
 * in the list, or undefined when there is no such element.
 *
 * If you haven’t already, also write a recursive version of nth.
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

function init() {
    console.log(arrayToList([10, 20]));
}

module.exports = {init};
