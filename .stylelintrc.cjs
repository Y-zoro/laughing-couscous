module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-idiomatic-order', 'stylelint-config-recommended-vue'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'unit-no-unknown': null,
        'selector-class-pattern': null,
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'font-family-no-missing-generic-family-keyword': null,
        'indentation': 4,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['deep']
            }
        ],
        "at-rule-no-unknown": [
            true,
            {
              "ignoreAtRules": ["mixin", "include","extend"]
            }
       ]
    },
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            customSyntax: 'postcss-html'
        }
    ],
    customSyntax: 'postcss-scss'
}
