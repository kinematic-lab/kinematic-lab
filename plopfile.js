const app_generator = require('./plop/generators/app.js');
const pkg_generator = require('./plop/generators/package.js');

const app_dir = './apps';
const pkg_dir = './packages';
const plop_dir = './plop';

module.exports = function (plop) {
	plop.setGenerator('App', app_generator(app_dir, plop_dir));
	plop.setGenerator('Package', pkg_generator(pkg_dir, plop_dir));
};
