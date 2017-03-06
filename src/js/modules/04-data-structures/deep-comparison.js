// The == operator compares objects by identity. 
// But sometimes, you would prefer to compare the values of their actual properties.

// Write a function, deepEqual, that takes two values and returns true only if 
// they are the same value or are objects with the same properties whose values
// are also equal when compared with a recursive call to deepEqual.

// function objectLength(obj) {
//     let length = 0;
//     for (key in obj) {
//         if(obj.hasOwnProperty(key)) {
//             length ++;
//         }
//     }
//     return length;
// }

function deepEqual(obj, obj2) {
    let objectMatch = true;

    // Return false if args passed in are not objects or are null
    if ((obj === null || typeof obj != 'object') && (obj2 === null || typeof(obj2 != 'object'))) {
        return false;
    }

    if (Object.keys(obj).length != Object.keys(obj2).length) {
        return false;
    }

    // Now we know they're non null objects of the same length,
    // go over the properties (keys) of one, and for each
    // of them, verify that the other object also has the same property.
    for (key in obj) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        // Call deepEqual again, and if it returns false,
        // exit this loop too.
        if (! deepEqual(obj.key, obj2.key)) {
            return false;
        }
    }

    return true;
}

function init() {
    const myObject = {
        here: {
            is: 'an'
        },
        object: 2
    };

    const myObject2 = {
        here: 'an',
        object: 2
    };

    console.log(deepEqual(myObject, myObject));
    console.log(deepEqual(myObject, myObject2));
}

module.exports = { init };