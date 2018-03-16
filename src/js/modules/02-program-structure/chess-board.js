/**
 * Create an 8x8 grid that alternates ' ' and '#'.
 * E.g.
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 */

function init() {
    const gridSize = 8;
    let counter = '';

    // Two loops, outer one to create the rows, inner to create the columns
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            // % checks whether there's a remainder
            // so the == 0 says, if the remainder
            // is 0, i.e. if it's even in this case.
            if((i + j) % 2 == 0) {
                counter += ' ';
            } else {
                counter += '#';
            }
        }
        counter += '\n'; // Output a new line
    }

    console.log(counter);
}

module.exports = {init};
