const exerciseBreak = '--- End of exercise ---';
const loopingTriangle = require('./modules/02-program-structure/looping-triangle');
const fizzBuzz = require('./modules/02-program-structure/fizz-buzz');
const chessBoard = require('./modules/02-program-structure/chess-board');

document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        loopingTriangle.init();
        console.log(exerciseBreak);

        fizzBuzz.init();
        console.log(exerciseBreak);

        chessBoard.init();
        console.log(exerciseBreak);
    }
});
