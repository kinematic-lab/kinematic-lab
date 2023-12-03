import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit';

const autoImports = {
	core: './runtime/core',
	browser: './runtime/browser',
	nuxt: './runtime/nuxt',
};

export default defineNuxtModule<{
	include?: string[];
	exclude?: string[];
}>({
	meta: {
		name: '@kinematic-lab/nuxt',
		configKey: 'kinematicLab',
		compatibility: { nuxt: '^3.0.0' },
	},

	setup(options) {
		const include = (options.include ?? Object.keys(autoImports)).filter(
			(include) => !(options.exclude ?? []).includes(include)
		);

		const resolver = createResolver(import.meta.url);
		Object.entries(autoImports).forEach(([key, path]) => {
			include.includes(key) && addImportsDir(resolver.resolve(path));
		});
	},
});
