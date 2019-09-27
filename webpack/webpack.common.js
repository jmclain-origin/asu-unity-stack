/**
 * Created by ctestama on 3/21/18.
 */
const path = require("path");

module.exports = {
    context: path.join(__dirname, '..', 'packages'),
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader',
                  "eslint-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
