const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

module.exports = {
	devServer: {
		port: 3001,
	},
	optimization: {
		splitChunks: false,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "react_app_2",
			filename: "remoteEntry.js",
			remotes: {
				react_app: "react_app@http://loclhost:3000/remoteEntry.js",
			},
			shared: {
				...dependencies,
				react: {
					singleton: true,
					requiredVersion: dependencies.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: dependencies["react-dom"],
				},
			},
		}),
	],
};
