// The == operator compares objects by identity. 
// But sometimes, you would prefer to compare the values of their actual properties.

// Write a function, deepEqual, that takes two values and returns true only if 
// they are the same value or are objects with the same properties whose values
// are also equal when compared with a recursive call to deepEqual.

function deepEqual(obj, obj2) {

    let objectMatch = false;

    // Early exit 1
    // Checks whether obj and obj2 are null or not 'object'
    if (obj === null || typeof(obj) !== 'object' || obj2 === null || typeof(obj2) !== 'object') {
        console.log('One of both of the arguments passed in to deepEqual were not objects, or were null.')
        return false;
    }

    // Early exit 2
    // Checks whether obj and obj2 have the same number of properties
    if (Object.keys(obj).length !== Object.keys(obj2).length) {
        console.log('The objects have a different number of properties');
        return false;
    }

    // Now need to loop through keys
    for (prop in obj) {

        // Early exit 3
        // Checks that obj2 has same properties as obj
        // .hasOwnProperty returns a boolean
        if (!obj2.hasOwnProperty(prop)) {
            console.log('Objects have different properties');
            return false;
        }

        // Need to check here if they are objects.
        // Just because they're not objects, doesn't mean the keys don't match.
        // So if the property of they keys (of obj 1 and 2) are an object, run deepEqual again.
        if (typeof(obj[prop]) === 'object' && typeof(obj2[prop]) === 'object') {
            deepEqual(obj[prop], obj2[prop]);
        }

        // If the properties are not objects, check if they are the same.
        if (obj[prop] === obj2[prop]) {
            objectMatch = true;
        } else {
            console.log('properties didn\'t match');
            objectMatch = false;
        }
    }

    return objectMatch;
}

function init() {
    const simpleObject = {
        key: 1,
        key: 2
    };

    const simpleObject2 = {
        key1: 1,
        key2: 2
    };

    const complexObject = {
        objFirst: {
            objFirstSub: 'obj-child-object'
        },
        objSecond: 2
    };

    const complexObject2 = {
        obj2First: 'obj2 string',
        obj2Second: 3
    };

    console.log(deepEqual(simpleObject, simpleObject));
    console.log(deepEqual(simpleObject, simpleObject2));
    console.log(deepEqual(complexObject, complexObject));
    console.log(deepEqual(complexObject, complexObject2));
}

module.exports = { init };