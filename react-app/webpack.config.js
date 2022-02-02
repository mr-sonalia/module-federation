// const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const components = "./src/components";
const { dependencies } = require("./package.json");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    publicPath: "http://localhost:3000",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "react_app",
      // library: { type: "var", name: "react_app" },
      filename: "remoteEntry.js",
      exposes: {
        ReactCard: "./src/components/ReactCard.jsx",
      },
      shared: dependencies,
    }),
  ],
};
