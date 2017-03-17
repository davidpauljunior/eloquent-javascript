import test from 'ava';
import deepComparison from '../src/js/modules/04-data-structures/deep-comparison';

test('expect non object argument to return false', t => {
    t.false(deepComparison.init(
        4,
        {good: 'morning'}
    ));
});

test('expect two simple matching objects to return true', t => {
    t.true(deepComparison.init(
        {good: 'morning'},
        {good: 'morning'}
    ));
});

test('expect two simple mismatching objects to return false', t => {
    t.false(deepComparison.init(
        {good: 'morning'},
        {good: 'afternoon'}
    ));
});

test('expect two nested matching objects to return true', t => {
    t.true(deepComparison.init(
        {
            good: 'morning',
            number: 1
        },
        {
            good: 'morning',
            number: 1
        }
    ));
});


test('expect two nested mismatching objects to return false', t => {
    t.false(deepComparison.init(
        {
            good: 'morning',
            happy: 'birthday'
        },
        {
            good: 'morning',
            number: 1
        }
    ));
});