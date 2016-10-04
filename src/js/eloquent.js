const exerciseBreak = '--- End of exercise ---';
// const loopingTriangle = require('./modules/02-program-structure/looping-triangle');
// const fizzBuzz = require('./modules/02-program-structure/fizz-buzz');
const sticky = require('./modules/sticky');
const tableOfContents = require('./modules/table-of-contents');

// loopingTriangle.init();
// console.log(exerciseBreak);
//
// fizzBuzz.init();
// console.log(exerciseBreak);

document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        sticky.init();
        tableOfContents.init();
    }
});
