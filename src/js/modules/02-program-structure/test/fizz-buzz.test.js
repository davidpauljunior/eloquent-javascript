const fizzBuzz = require('../fizz-buzz');

test('Should log fizz, buzz, or fizzbuzz for numbers divisible by 3, 5, or both 3 and 5', () => {
    const spy = jest.spyOn(console, 'log');
    fizzBuzz.init();

    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls.length).toBe(100);
    expect(spy.mock.calls[2][0]).toBe('Fizz');
    expect(spy.mock.calls[4][0]).toBe('Buzz');
    expect(spy.mock.calls[14][0]).toBe('FizzBuzz');
    expect(spy.mock.calls[29][0]).toBe('FizzBuzz');

    expect(spy.mock.calls[6][0]).toBe(7);
});
