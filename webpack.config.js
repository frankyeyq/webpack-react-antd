const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'boundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: false,
        inline: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre', //加载器的执行顺序，不设置为正常执行，pre（前）|post（后），eslint是检查代码规范，应该在编译前就执行
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: []
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.svg/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
