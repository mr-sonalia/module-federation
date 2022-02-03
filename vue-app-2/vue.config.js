const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: "http://localhost:9000/",
	devServer: {
		port: 9000,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers":
				"X-Requested-With, content-type, Authorization",
		},
	},
	configureWebpack: {
		cache: false,
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: {
						presets: ["@babel/preset-react"],
					},
				},
			],
		},
		resolve: {
			extensions: [".vue", ".jsx", ".js", ".json"],
			alias: {
				vue: "vue/dist/vue.esm-bundler.js",
			},
		},
		plugins: [
			new ModuleFederationPlugin({
				name: "vue_app_2", // Current project name
				filename: "remoteEntry.js",
				remotes: {
					vue_app: "vue_app@http://localhost:8080/remoteEntry.js",
					react_remote: "react_remote@http://localhost:3000/remoteEntry.js",
				},
				shared: {
					...dependencies,
					vue: {
						singleton: true,
						requiredVersion: dependencies.vue,
					},
					"vue-router": {
						singleton: true,
						requiredVersion: dependencies["vue-router"],
					},
					vuex: {
						singleton: true,
						requiredVersion: dependencies["vuex"],
					},
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
		optimization: {
			splitChunks: false,
		},
	},
});
