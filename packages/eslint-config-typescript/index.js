module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'turbo',
		'prettier',
	],

	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	env: {
		browser: true,
		amd: true,
		node: true,
	},

	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],

		'prefer-destructuring': ['warn', { object: true, array: true }],
		'no-unused-vars': 0,
		'no-undef': 0,

		'@typescript-eslint/triple-slash-reference': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 1,
		'@typescript-eslint/no-unused-vars': 2,
	},
};
