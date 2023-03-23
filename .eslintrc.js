module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:nuxt/recommended',
		'prettier',
		'core',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
};
