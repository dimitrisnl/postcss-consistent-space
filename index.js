var postcss = require('postcss');

module.exports = postcss.plugin('postcss_consistent_space', function (opts) {
    opts = opts || {};

    const cases = ['padding', 'margin'];
    const unit  = opts.unit || 'px';
    const base  = opts.base || 8;

    return function (root) {

        root.walkAtRules('space', rule => {

            let params = rule.params.split(' ');

            // include cases like 'padding-left', etc
            if (cases.indexOf(params[0] > -1) && params.length > 1) {

                // remake with template literals, when babel is not needed
                const output = (params[1] ? params[1] * base + unit : '') +
                              (params[2] ? ' ' + params[2] * base + unit : '') +
                              (params[3] ? ' ' + params[3] * base + unit : '') +
                              (params[4] ? ' ' + params[4] * base + unit : '');

                const declaration = postcss.decl({
                    prop: params[0],
                    value: output
                });

                rule.replaceWith(declaration);

            }

        });

    };

});
