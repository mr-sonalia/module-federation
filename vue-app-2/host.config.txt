const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: "http://localhost:9000/",
	devServer: {
		port: 9000,
	},
	configureWebpack: {
		cache: false,
		plugins: [
			new ModuleFederationPlugin({
				name: "vue_app_2", // Current project name
				filename: "remoteEntry.js",
				remotes: {
					vue_app: "vue_app@http://localhost:8080/remoteEntry.js",
				},
				// exposes: {
				// 	VueCard: "./src/components/VueCard.vue",
				// },
				// shared: require('./package.json').dependencies,
				shared: {
					...dependencies,
					vue: {
						// eager: true,
						singleton: true,
						// strictVersion: true,
						requiredVersion: dependencies.vue,
					},
					"vue-router": {
						// eager: true,
						singleton: true,
						// strictVersion: true,
						requiredVersion: dependencies["vue-router"],
					},
					vuex: {
						// eager: true,
						singleton: true,
						// strictVersion: true,
						requiredVersion: dependencies["vuex"],
					},
				},
			}),
		],
		optimization: {
			splitChunks: false
		},
	},
});
