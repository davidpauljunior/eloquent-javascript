const loopingTriangle = require('../src/js/modules/02-program-structure/looping-triangle');

test('expect a triangle of hashes to be returned to the console', () => {
    window.console.log = jest.fn().mockImplementation(() => {});

    loopingTriangle.init();

    expect(window.console.log).toHaveBeenCalledTimes(7);
    expect(window.console.log).toHaveBeenCalledWith('#');
});