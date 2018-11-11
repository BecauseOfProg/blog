module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-indent': 'error',
    'vue/require-default-prop': 'warning',
    'vue/attributes-order': 'error',
    'vue/this-in-template': 'warning',
    'vue/html-end-tags': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/require-prop-types': 'error',
    'vue/html-self-closing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/html-quotes': 'error',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/script-indent': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
