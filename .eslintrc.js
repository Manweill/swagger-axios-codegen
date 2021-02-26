// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-bitwise': 'off',
    'handle-callback-err': 'off',
    'no-shadow': 'off',
    'no-catch-shadow': 'off',
    'no-useless-catch': 'off',
    'prefer-const':'off',
    radix: 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
