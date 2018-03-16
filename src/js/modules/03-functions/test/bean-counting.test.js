const beanCounting = require('../bean-counting');

test('Should log the number of specified characters from a given string', () => {
    const spy = jest.spyOn(console, 'log');

    beanCounting.init('mississippi', 'i');
    expect(spy.mock.calls[0][0]).toBe(4);
});
