const loopingTriangle = require('../src/js/modules/02-program-structure/looping-triangle');

test('expect a triangle of hashes to be returned to the console', () => {
    window.console.log = jest.fn().mockImplementation(() => {});

    loopingTriangle.init();
    expect(window.console.log).toBeCalled();
});
// Need to stub console.log and then check number of times
// it's called and what it's outputting.
// t.is(loopingTriangle.init(), '#######');