module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {filename: "bundle.js"},
    resolve: {extenstions: [".ts",".tsx", ".js",".css"]},
    module: {
        rules: [
            {test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/}
        ]
    }
};