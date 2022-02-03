const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-react", { runtime: "automatic" }],
							"@babel/preset-env",
						],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new HotModuleReplacementPlugin(),
		new ModuleFederationPlugin({
			name: "react_remote",
			filename: "remoteEntry.js",
			exposes: {
				"./ReactCard": "./src/components/ReactCard.jsx",
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
	devServer: {
		port: 3000,
	},
	optimization: {
		splitChunks: false,
	},
};
