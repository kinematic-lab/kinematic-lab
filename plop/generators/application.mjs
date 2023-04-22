export default (rootDirectory, plopDirectory) => {
	return {
		description: 'Generates a new app',

		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name the app',
			},

			{
				type: 'list',
				name: 'type',
				message: 'Select app type',
				choices: ['nuxt'],
			},

			{
				type: 'input',
				name: 'port',
				message: 'Specify port',
				default: '3000',
			},
		],

		actions: [
			{
				type: 'addMany',
				base: `${plopDirectory}/templates/application-{{ type }}`,
				destination: `${rootDirectory}/{{ dashCase name }}`,

				templateFiles: [
					`${plopDirectory}/templates/application-{{ type }}/**.hbs`,
					`${plopDirectory}/templates/application-{{ type }}/public/**.hbs`,
				],

				globOptions: {
					dot: true,
				},
			},
		],
	};
};
