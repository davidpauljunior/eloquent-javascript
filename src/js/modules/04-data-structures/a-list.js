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

// This needs to take the list, convert
// it to an array, then add the new element
// into the array, then convert that into
// a list.
function prepend(el, list) {
    let array = listToArray(list);
    array.unshift(el);

    return arrayToList(array);
}

// takes a list and a number
// and returns the element at the
// given position in the list,
// or undefined where there's no
// such element.
function nth(list) {
    // const array = listToArray(list);

    if (bla) {
        return bla.value;
    } else if (blabla) {
        return null;
    } else {
        return nth(list);
    }

    // Basically it checks something,
    // If x condition does is true it
    // rmeturns value, otherwise it returns
    // null, otherwise it calls itself
    // goes through again.
    // So what are we looking for?
    // As you loop through the list,
    // you want to see if the number passed
    // in is the stage you're at in the loop,
    // and if so return the value, otherwise
    // return null.

}

function init() {
    console.log(arrayToList([10, 20, 30, 40]));
    console.log(listToArray(arrayToList([10, 20, 30, 40]))); // converts array to list and then back again.
    console.log(prepend(10, prepend(20, null)));
    console.log(nth(arrayToList([10, 20, 30, 40])));
}

module.exports = {init};
