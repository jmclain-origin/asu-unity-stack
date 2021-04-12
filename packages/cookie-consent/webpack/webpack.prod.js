const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const PROJECT_DIR = path.resolve(__dirname, "../");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(PROJECT_DIR, "dist"),
    filename: "[name].min.js",
    libraryTarget: "umd",
    library: "AsuCookieConsent",
    umdNamedDefine: true,
  },
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       parallel: true,
  //       terserOptions: {
  //         ecma: 6,
  //       },
  //     }),
  //     new CssMinimizerPlugin(),
  //   ],
  // },
});
