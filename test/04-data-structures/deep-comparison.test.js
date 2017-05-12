const deepComparison = require('../../src/js/modules/04-data-structures/deep-comparison');

test('compare non object and object arguments', () => {
    const init = deepComparison.init(
        4,
        {good: 'morning'}
    )
    expect(init).toBe(false);
});

test('compare two simple matching objects', () => {
    const init = deepComparison.init(
        {good: 'morning'},
        {good: 'morning'}
    )
    expect(init).toBe(true);
});

test('compare two simple mismatching objects', () => {
    const init = deepComparison.init(
        {good: 'morning'},
        {good: 'afternoon'}
    )
    expect(init).toBe(false);
});

test('compare two nested matching objects', () => {
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

test('compare two nested mismatching objects', () => {
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
