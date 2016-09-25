function init() {
    var result = '';

    for(var i = 0; i < 7; i++) {
        console.log(result += '#');
    }
}

module.exports = { init: init };
