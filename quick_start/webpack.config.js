const path = require('path')
const webpack = require('webpack') // 用于访问内置插件

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.zsn/,
                use: path.resolve(__dirname, './loader/zsn-loader.js') // 使用 zsn-loader
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: "通过 BannerPlugin 的使用来查看 webpack 运行机制"
        })
    ]
}