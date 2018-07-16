const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


var config = {
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 100
    // },
    entry: {
        home: "./frontend/dev/js/home/index.js",
        chat: "./frontend/dev/js/chat/index.js"
    },
    output: {
        path: path.resolve(__dirname, "frontend/dist"),
        filename: "js/[name].bundle.js",
        publicPath: "/"
    },
    plugins: [
        new CleanWebpackPlugin(["./frontend/dist"]),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
          }),
        new HtmlWebpackPlugin({
            inject: false,
            template: "./frontend/dev/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: "./frontend/dev/chat.html",
            filename: "chat.html"
        })
    ],
    devtool: "eval-source-map",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img/",
                        publicPath: "./../img"
                    }
                  },
                  {
                    loader: "image-webpack-loader",
                    options: { },
                  }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                        publicPath: "./../fonts"
                    }
                  }
                ]
            },
        ]
    }
};


module.exports = (env, argv) => {
    config.devtool = argv.mode === "development" 
                                    ? "eval-source-map" 
                                    : false;
    return config;
}