const deepComparison = require('../deep-comparison');

test('Should return false when comparing non object and object arguments', () => {
    const init = deepComparison.init(
        4,
        {good: 'morning'}
    )
    expect(init).toBe(false);
});

test('Should return true when comparing two simple matching objects', () => {
    const init = deepComparison.init(
        {good: 'morning'},
        {good: 'morning'}
    )
    expect(init).toBe(true);
});

test('Should return false when comparing two simple mismatching objects', () => {
    const init = deepComparison.init(
        {good: 'morning'},
        {good: 'afternoon'}
    )
    expect(init).toBe(false);
});

test('Should return true when comparing two nested matching objects', () => {
    const init = deepComparison.init(
        {
            good: 'morning',
            number: 1
        },
        {
            good: 'morning',
            number: 1
        }
    )
    expect(init).toBe(true);
});

test('Should return false when comparing two nested mismatching objects', () => {
    const init = deepComparison.init(
        {
            good: 'morning',
            happy: 'birthday'
        },
        {
            good: 'morning',
            number: 1
        }
    )
    expect(init).toBe(false);
});
