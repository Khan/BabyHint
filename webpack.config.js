module.exports = {
    entry: __dirname + "/test/test.js",
    output: {
        path: __dirname + "/test",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|external)/,
                loader: 'babel-loader'
            }
        ]
    }
};
