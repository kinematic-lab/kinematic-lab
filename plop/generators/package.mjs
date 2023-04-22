export default (rootDirectory, plopDirectory) => {
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
				base: `${plopDirectory}/templates/package-{{ type }}`,
				destination: `${rootDirectory}/{{ dashCase name }}`,

				templateFiles: [
					`${plopDirectory}/templates/package-{{ type }}/**.hbs`,
					`${plopDirectory}/templates/package-{{ type }}/src/**.hbs`,
					`${plopDirectory}/templates/package-{{ type }}/tests/**.hbs`,
					`${plopDirectory}/templates/package-{{ type }}/types/common/**.hbs`,
					`${plopDirectory}/templates/package-{{ type }}/components/**.hbs`,
				],

				globOptions: {
					dot: true,
				}
			},
		],
	};
};
