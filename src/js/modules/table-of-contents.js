const core = require('./core');

function init() {
    const toc = document.querySelector('.table-of-contents');

    if (toc.length > 0 && toc.classList.contains('is-fixed')) {
        console.log('boom');
    }
}

module.exports = { init: init };
