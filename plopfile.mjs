import ApplicationGenerator from './plop/generators/application.mjs';
import PackageGenerator from './plop/generators/package.mjs';

const directories = {
	applications: './apps',
	packages: './packages',
	plop: './plop',
};

export default (plop) => {
	plop.setGenerator(
		'Application',
		ApplicationGenerator(directories.applications, directories.plop)
	);

	plop.setGenerator(
		'Package',
		PackageGenerator(directories.packages, directories.plop)
	);
};
