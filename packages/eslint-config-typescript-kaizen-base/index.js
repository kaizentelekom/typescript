module.exports = {
  extends: ['@kaizentech/base', 'airbnb-typescript/base'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    // turn it off for functions that don't use "this"
    'class-methods-use-this': 'off',

    // unlimited class
    'max-classes-per-file': 'off',

    // do not use comma end of the object
    '@typescript-eslint/comma-dangle': ['error', 'never'],

    // show error if there is semicolon
    '@typescript-eslint/semi': ['error', 'never'],

    // allow private and protected
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true
      }
    ],

    // do not use array constructor
    '@typescript-eslint/no-array-constructor': 'error',

    // do not use func constructor
    '@typescript-eslint/no-implied-eval': 'error',

    // do not define func inside loops
    '@typescript-eslint/no-loop-func': 'error',

    // put space before blocks
    '@typescript-eslint/space-before-blocks': 'error',

    // prevent eslint to complain about the "styles" variable being used before it was defined
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],

    // use single quotes
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],

    '@typescript-eslint/space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],

    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    '@typescript-eslint/indent': 'off'
  }
}
