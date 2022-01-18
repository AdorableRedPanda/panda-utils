const build = require('./build');

module.exports = {
	...build,

	mode: 'development',
	devtool: 'eval-source-map',
	watch: true,
	optimization: {
		minimize: false,
	},
}