function init() {
    const gridSize = 8;
    let counter = '';

    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            // % checks is there's a remainder
            // so the == 0 says, if there's no
            // remainder, i.e. if it's even.
            if((i + j) % 2 == 0) {
                counter += ' ';
            } else {
                counter += '#';
            }
        }
        counter += '\n';
    }

    console.log(counter);
}

module.exports = {init};
