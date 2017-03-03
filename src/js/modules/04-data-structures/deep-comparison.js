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

    if ((typeof obj != 'object') && (typeof(obj2 != 'object'))) {
        return false;
    }

    if (Object.keys(obj).length != Object.keys(obj2).length) {
        return false;
    }

    // Now we know they're the same length,
    // go over the properties of one, and for each
    // of them, verify that the other object also has the project.
    for (key in obj) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }

        // check here if obj.key is object
        // yes, it is.

        if (typeof(obj.key) != 'object') {
            if (obj.key != obj2.key) {
                return false;
            }
        }

        // key === 'here'

        // obj.key === {is: 'an'}

       objectMatch = deepEqual(obj.key, obj2.key); // false

    }

    return objectMatch;
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

module.exports = {init};