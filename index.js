'use strict';

const postcss = require('postcss');

const withDirections = s => [
  s,
  `${s}-top`,
  `${s}-right`,
  `${s}-bottom`,
  `${s}-left`
];

module.exports = postcss.plugin('postcss_consistent_space', opts => {
  opts = opts || {};

  const unit = opts.unit || 'px';
  const base = opts.base || 8;
  const cases = [...withDirections('padding'), ...withDirections('margin')];

  return root => {
    root.walkAtRules('space', rule => {
      const params = rule.params.split(' ');
      const prop = params.shift();

      if (cases.includes(prop) && params.length > 0) {
        const value = params.reduce((s, c) => s + c * base + unit + ' ', '');
        const decl = postcss.decl({ prop, value: value.trim() });
        rule.replaceWith(decl);
      }
    });
  };
});
