const deepComparison = require('../src/js/modules/04-data-structures/deep-comparison');

test('expect non object argument to return false', () => {
    expect(deepComparison.init(
        4,
        {good: 'morning'}
    )).toBe(false);
});

test('expect two simple matching objects to return true', () => {
    expect(deepComparison.init(
        {good: 'morning'},
        {good: 'morning'}
    )).toBe(true);
});

test('expect two simple mismatching objects to return false', () => {
    expect(deepComparison.init(
        {good: 'morning'},
        {good: 'afternoon'}
    )).toBe(false);
});

test('expect two nested matching objects to return true', () => {
    expect(deepComparison.init(
        {
            good: 'morning',
            number: 1
        },
        {
            good: 'morning',
            number: 1
        }
    )).toBe(true);
});


test('expect two nested mismatching objects to return false', () => {
    expect(deepComparison.init(
        {
            good: 'morning',
            happy: 'birthday'
        },
        {
            good: 'morning',
            number: 1
        }
    )).toBe(false);
});