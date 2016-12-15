const exerciseBreak = '--- End of exercise ---';
const loopingTriangle = require('./modules/02-program-structure/looping-triangle');
const fizzBuzz = require('./modules/02-program-structure/fizz-buzz');
const chessBoard = require('./modules/02-program-structure/chess-board');

const minimum = require('./modules/03-functions/minimum');
const recursion = require('./modules/03-functions/recursion');
const beanCounting = require('./modules/03-functions/bean-counting');

const sumOfRange = require('./modules/04-data-structures/sum-of-range');
const reversingAnArray = require('./modules/04-data-structures/reversing-an-array');
const aList = require('./modules/04-data-structures/a-list');
const deepComparison = require('./modules/04-data-structures/deep-comparison');

document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        loopingTriangle.init();
        console.log(exerciseBreak);

        fizzBuzz.init();
        console.log(exerciseBreak);

        chessBoard.init();
        console.log(exerciseBreak);

        minimum.init();
        console.log(exerciseBreak);

        recursion.init();
        console.log(exerciseBreak);

        beanCounting.init();
        console.log(exerciseBreak);

        sumOfRange.init();
        console.log(exerciseBreak);

        reversingAnArray.init();
        console.log(exerciseBreak);

        aList.init();
        console.log(exerciseBreak);

        deepComparison.init();
        console.log(exerciseBreak);
    }
});
