import pluginJs from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
			'no-console': 'error',
			'no-shadow': 'off',
			'no-duplicate-imports': 'error',
			'no-var': 'error',
			'no-useless-catch': 'warn',
			'no-nested-ternary': 'warn',
			'prefer-arrow-callback': 'warn',
			'no-restricted-syntax': [
				'error',
				'FunctionExpression',
				'FunctionDeclaration',
			],
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: 'function', next: 'function' },
				{ blankLine: 'always', prev: 'function', next: 'block' },
				{ blankLine: 'always', prev: 'block', next: 'function' },
			],
			'comma-dangle': [2, 'always-multiline'],
			'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						// Packages `react` related packages come first.
						['^react', '^@?\\w'],
						// Mui packages
						// ['^@mui'],
						// Internal packages.
						[
							'^(@|components|services|pages|features|common|utils|routes|types)(/.*|$)',
						],
						// Internal packages.
						['^()(/.*|$)'],
						// Side effect imports.
						['^\\u0000'],
						// Parent imports. Put `..` last.
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						// Other relative imports. Put same-folder imports and `.` last.
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						// Style imports.
						['^.+\\.?(css)$'],
					],
				},
			],
		},
	},
];
