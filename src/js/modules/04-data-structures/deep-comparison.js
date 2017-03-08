// The == operator compares objects by identity. 
// But sometimes, you would prefer to compare the values of their actual properties.

// Write a function, deepEqual, that takes two values and returns true only if 
// they are the same value or are objects with the same properties whose values
// are also equal when compared with a recursive call to deepEqual.

function deepEqual(obj, obj2) {

    // Early exit 1
    // Checks whether obj and obj2 are null or not 'object'
    if ((obj === null || typeof(obj) != 'object') && (obj2 === null || typeof(obj2) != 'object')) {
        return false;
    }

    // Early exit 2
    // Checks whether obj and obj2 have the same number of properties
    if (Object.keys(obj).length != Object.keys(obj2).length) {
        console.log('different number of props');
        return false;
    }

    // Now need to loop through keys
    
    for (prop in obj) {

        // Early exit 3
        // Checks that obj2 has same properties as obj
        // .hasOwnProperty returns a boolean
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        }

        // console.log(obj[prop]); // returns string because the key is a string, e.g. 'hello', 'object'
        // console.log(obj2[prop]);

        // Call deepEqual again and passthrough the looped through properies (actually gives values)
        // If that returns false, return this loop false.
        // console.log(obj2[prop]);
        console.log(obj[prop]);
        console.log(typeof(obj[prop]));
        console.log(deepEqual(obj[prop], obj2[prop]));
        // if (!deepEqual(obj[prop], obj2[prop])) {
        //     // console.log(
        //     //     typeof(obj[prop]), // returns string, need obj.
        //     //     typeof(obj2[prop]) // returns undefined
        //     // );
        //     return false;
        // }
    }
    return true;
}

function init() {
    const myObject = {
        objFirst: {
            objFirstSub: 'obj-child-object'
        },
        objSecond: 2
    };

    const myObject2 = {
        obj2First: 'obj2 string',
        obj2Second: 3,
        obj2Third: 4
    };

    console.log(deepEqual(myObject, myObject));
    // console.log(deepEqual(myObject, myObject2));
}

module.exports = { init };