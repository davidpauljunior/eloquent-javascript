/**
 * Write a function, deepEqual, that takes
 * two values and returns true only if they
 * are the same value or are objects with the
 * same properties whose values are also equal
 * when compared with a recursive call to deepEqual.
 *
 * To find out whether to compare things by identity
 * (use the === operator for that) or by looking at
 * their properties, you can use the typeof operator.
 * If it produces "object" for both values, you should
 * do a deep comparison.  But you have to take one
 * silly exception into account: by a historical
 * accident, typeof null also produces "object".
 */

function deepEqual(a, b) {
    if (a == null || b == null || typeof a != 'object' || typeof b != 'object') {
        return false;
    }

    if (Object.keys(a).length != Object.keys(b).length) {
        return false;
    }

    for (prop in a) {
        if (b.hasOwnProperty(prop)) {
            if (! deepEqual(a[prop], b[prop])) {
                // Returning false here :anger:
                return false;
            }
        } else {
            return false;
        }
    }

    return true;

    // if (a != null || typeof a == 'object' || b != null || typeof b == 'object') {
    //
    // } else {
    //     return a === b; // Returns boolean
    // }
}

function init() {
    const obj = {here: {is: 'an'}, object: 2};
    // console.log(deepEqual(obj, obj));
    // console.log(deepEqual(obj, {here: 1, object: 2}));
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
}

module.exports = {init};
