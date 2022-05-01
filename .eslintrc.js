// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prefer-arrow',
  ],
  ignorePatterns: [
    'configs/*',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['interface', 'typeAlias'],
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    'arrow-body-style': 'off',
    'no-use-before-define': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    // разрешаем не конвертировать методы класса, не использующие this, в статичные методы
    'class-methods-use-this': 0,
    // одинарные кавычки в JSX
    'jsx-quotes': [2, 'prefer-single'],
    // максимальная длина строки
    'max-len': [
      'error',
      140,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-unused-expressions': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [2, { packageDir: '.' }],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'never',
      },
    ],
    // запрещаем присваивать параметрам функции другие значения, но разрешаем это делать для пропсов параметров
    'no-param-reassign': ['error', { props: false }],
    // запрещаем скобки вокруг единственного аргумента стрелочной функции
    'arrow-parens': [2, 'as-needed'],
    // разрешаем писать chained-методы в одну строку
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'max-lines': [2, { skipComments: true }],

    // необязательно элементам указывать аттрибут role
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-restricted-properties': [
      2,
      {
        property: 'keyCode',
        message:
          'KeyboardEvent.keyCode is deprecated. Please use KeyboardEvent.code instead.',
      },
    ],
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
  ],
};
