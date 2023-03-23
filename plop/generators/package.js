module.exports = function global(root_dir, plop_dir) {
	return {
		description: 'Generates a new package',

		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name the package',
			},

			{
				type: 'list',
				name: 'type',
				message: 'Select package type',
				choices: ['typescript'],
			},
		],

		actions: [
			{
				type: 'addMany',
				base: `${plop_dir}/templates/package-{{ type }}`,
				destination: `${root_dir}/{{ dashCase name }}`,

				templateFiles: [
					`${plop_dir}/templates/package-{{ type }}/**.hbs`,
					`${plop_dir}/templates/package-{{ type }}/src/**.hbs`,
					`${plop_dir}/templates/package-{{ type }}/types/common/**.hbs`,
					`${plop_dir}/templates/package-{{ type }}/components/**.hbs`,
				],

				globOptions: {
					dot: true,
				}
			},
		],
	};
};
