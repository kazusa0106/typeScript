module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'space-before-function-paren': 0,

    'prefer-destructuring': 0,
    'function-paren-newline': 0,
    'no-restricted-globals': 0,
    'object-curly-newline': 0,



    'eol-last': 0,
    'object-shorthand': 0,
    "no-trailing-spaces": 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eqeqeq': 0,
    'func-names': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'comma-dangle': ["error", "never"],
    'no-unused-vars': 0,
    'no-console': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': 0,
    'no-inner-declarations': 0,
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-body-style': 0,
    'prefer-template': 0,
    'prefer-arrow-callback': 0,
    'new-cap': 0,
    'no-eval': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'newline-per-chained-call': 0,
    'linebreak-style': 0,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
    'arrow-parens': 0,
    'import/extensions': 0,
    'import/first': 0,
    'quotes': 0,
    'lines-between-class-members': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
