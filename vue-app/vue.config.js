const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
const  dependencies  = require("./package.json").dependencies;

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: "http://localhost:8080/",
	devServer: {
		port: 8080,
	},
	configureWebpack: {
		cache: false,
		plugins: [
			new ModuleFederationPlugin({
				name: "vue_app",
				filename: "remoteEntry.js",
				// remotes: {
				// 	react_app: "react_app@http://localhost:3000/remoteEntry.js",
				// },
				exposes: {
					"./VueCard": "./src/components/VueCard.vue",
				},
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

