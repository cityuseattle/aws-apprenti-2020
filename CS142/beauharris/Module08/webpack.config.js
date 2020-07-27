module.exports = {
    mode: "development",
    entry: {filename: "bundle.js"},
    resolve: {extenstions: [".ts", ".tsx", ".js", ".css"] },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }
        ]
    }
    devServer: {
        contentBase: "./assets",
        port: 4500
    }
};