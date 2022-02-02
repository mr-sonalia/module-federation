const { HtmlWebpackPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

module.exports = {
	output: {
		publicPath: "http://localhost:3001",
	},
	plugins: [
		new HtmlWebpackPlugin({
			name: "react_app_2",
			remotes: {
				react_app: "react_app@http://loclhost:3000/remoteEntry.js",
			},
			shared: dependencies,
		}),
	],
};
