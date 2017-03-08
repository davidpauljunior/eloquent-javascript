import test from 'ava';
import deepComparison from './src/js/modules/04-data-structures/deep-comparison';

test('deep-comparison', t => {
    deepComparison.init();

    t.deepEqual({hello: 'there'}, {hello: 'there'});
})
