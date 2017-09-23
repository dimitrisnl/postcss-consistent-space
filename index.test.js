'use strict';

var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('simple padding case', () => {
    return run('div{@space padding 1 2; display: flex}',
                'div{padding: 8px 16px; display: flex}', {});
});

it('simple margin-right case', () => {
    return run('div{@space margin-right 2}', 'div{margin-right: 16px}', {});
});

it('with params', () => {
    return run('div{@space margin-right 2}', 'div{margin-right: 8em}', {
        unit: 'em',
        base: 4
    });
});
