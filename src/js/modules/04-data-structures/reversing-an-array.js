/* Write two functions, reverseArray and reverseArrayInPlace.
 * The first, reverseArray, takes an array as argument and
 * produces a new array that has the same elements in the inverse order.
 * The second, reverseArrayInPlace, does what the reverse method does:
 * it modifies the array given as argument in order to reverse its elements.
 * Neither may use the standard reverse method
 */

function reverseArray(array) {
    // produces new array from the given array in reverse order

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }

    console.log(newArray);
}

function reverseArrayInPlace(array) {
    // modifies given array in order to reverse it's elements.
    // have to swap the first and last elements, then the 2nd and 2nd from last.
    // loop over half the array (round down with math.floor) and swapping
    // the element at position i with the one at position array.length - 1 -i.
    // local var to hold one of the elements

    console.log(array);

    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let el = array[i];
        const mirrorEl = array.length - 1 - i;

        array[i] = array[mirrorEl];
        array[mirrorEl] = el;
    }

    console.log(array);
}

function init() {
    reverseArray([1, 2, 3]);
    reverseArrayInPlace([4, 5, 6, 7, 8, 9, 10]);
    reverseArrayInPlace([1, 2, 3, 4]);
}

module.exports = {init};
