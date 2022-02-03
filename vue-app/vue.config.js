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
				exposes: {
					"./VueCard": "./src/components/VueCard.vue",
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
				},
			}),
		],
		optimization: {
			splitChunks: false
		},
	},
});

