module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4,],
        'linebreak-style': ['error', 'unix',],
        'quotes': ['warn', 'single',],
        'semi': ['error', 'always',],

        'comma-dangle': ['error', 'always',],
        'no-cond-assign': ['error', 'always',],

        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
};
