const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',

	output: {
		filename: 'index.js',
		path: path.join(__dirname, '../dist'),
		library: {
			name: "red-panda-utils",
			type: "umd"
		},
		globalObject: "this",
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.(ts)$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: ['.ts']
	},
}