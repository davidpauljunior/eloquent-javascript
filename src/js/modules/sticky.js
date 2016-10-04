// TODO
// Ensure that when TOC gets collapsed, the position of the Ad is updated.

// Something like, js-sticky will do all this and set no offsetTop
// But a custom class, like js-sticky-toc, can use a function from here (onScroll)
// and pass a custom offsetTop.

// Data-attr will be set by JS on each sticky el. // Needed?
// But need to update the scroll position (or viewport offset?) by a certain amount when called by Ad module.

// Need to say, if your scroll position is less than the position the Ad was on before scrolling started and remove the stickyness.

// TODO: Publish-Subscribe

// toc.js
//
// elementWatcher.exitViewport(function() {
//     console.log( 'I have left the viewport' );
//     core.trigger(toc, 'Toc-dimension-changed')
// });
//
// ==============
//
// ads.js
//
// toc.addEventListener('Toc-dimension-changed', (el) => {
//
// })

// TODO:
// Actually need to say, if one thing gets made sticky, you need to go and get all the other sticky things
// and update their data-position-top values.  Because fixing elements causes others to jump.
// It's not changing 'onScroll', but it's changing if any el becomes sticky.
// if(data-attr value !== previous value, update it);


const core = require('./core');

let lastScrollY = 0;

function updatePositionFromTop(el) {
    const startingPostionTop = el.getAttribute('data-position-top');
    const currentPositionTop = core.getTruePositionFromTop(el);

    if (currentPositionTop !== startingPostionTop) {
        el.setAttribute('data-position-top', currentPositionTop);
    }
}

function toggleClass(el, currentPositionTop, startingPostionTop) {
    const stickyClass = 'is-fixed';
    // offsetTop = offsetTop || 0;
    console.log(startingPostionTop);

    if (lastScrollY >= currentPositionTop) {
        updatePositionFromTop(el);

        // CONFUSED ABOUT HERE!  Have updated the data-attr with the new position but broken

        el.classList.add(stickyClass);
    }

    // if (lastScrollY < startingPostionTop) {
    //     el.classList.remove(stickyClass);
    // } else if (lastScrollY >= currentPositionTop) {
    //     el.classList.add(stickyClass);
    // }



    // if (lastScrollY >= currentPositionTop && lastScrollY > startingPostionTop) {
    //     console.log('should be sticky');
    //
    // } else {
    //     console.log('should not be sticky');
    //     el.classList.remove(stickyClass);
    // }
}

// requestAnimationFrame callback
function update(elsArray) {
    for (let i=0; i < elsArray.length; i++) {
        const el = elsArray[i];
        const startingPositionTop = el.getAttribute('data-position-top');
        const currentPositionTop = core.getTruePositionFromTop(el); // Position from document
        toggleClass(el, currentPositionTop, startingPositionTop);
    }
}

// Keeps track of last scroll event
// Rename onScroll (as not all scroll stuff)
function onScroll(elsArray) {
    if (elsArray.length > 0) {
        for (let i=0; i < elsArray.length; i++) {
            const startingPositionTop = core.getTruePositionFromTop(elsArray[i]);
            elsArray[i].setAttribute('data-position-top', startingPositionTop); // Needed?
        }

        window.addEventListener('scroll', function() {
            lastScrollY = window.pageYOffset;
            requestAnimationFrame(function() {
                update(elsArray);
            });
        }, false);
    }
}

function init() {
    const stickyEls = document.querySelectorAll('.js-sticky');
    onScroll(stickyEls);
}

module.exports = { init: init };
