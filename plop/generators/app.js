module.exports = function global(root_dir, plop_dir) {
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
				base: `${plop_dir}/templates/app-{{ type }}`,
				destination: `${root_dir}/{{ dashCase name }}`,

				templateFiles: [
					`${plop_dir}/templates/app-{{ type }}/**.hbs`,
					`${plop_dir}/templates/app-{{ type }}/public/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/assets/css/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/assets/css/settings/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/components/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/layouts/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/middleware/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/pages/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/plugins/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/static/**.hbs`,
					// `${plop_dir}/templates/app-{{ type }}/store/**.hbs`,
				],

				globOptions: {
					dot: true,
				}
			},
		],
	};
};
