/**
 * Write a loop that makes seven calls to 
 * console.log to output the following triangle:
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

function hashLoop() {
    let result = '';

    for(var i = 0; i < 7; i++) {
        console.log(result += '#');
    }
}

module.exports = {
    init: hashLoop
};
