const exerciseBreak = '--- End of exercise ---';
const loopingTriangle = require('./modules/02-program-structure/looping-triangle');
const fizzBuzz = require('./modules/02-program-structure/fizz-buzz');
const chessBoard = require('./modules/02-program-structure/chess-board');
const minimum = require('./modules/03-functions/minimum');
const recursion = require('./modules/03-functions/recursion');
const beanCounting = require('./modules/03-functions/bean-counting');

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
    }
});
