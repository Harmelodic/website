const SRC = __dirname + "/src/";
const PUBLIC = __dirname + "/public/";

module.exports = {
    entry: SRC + "index.js",
    output: {
        path: PUBLIC,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        "react"
                    ]
                }
            }
        ]
    }
};
