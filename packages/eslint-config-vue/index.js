module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:nuxt/recommended',
		'turbo',
		'prettier',
	],

	plugins: ['vue'],
	parser: 'vue-eslint-parser',

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
		'no-unused-vars': ['warn'],
		'no-undef': 0,

		'vue/no-v-html': 0,
		'vue/no-v-text-v-html-on-component': 0,
		'vue/multi-word-component-names': 0,
	},
};
