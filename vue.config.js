const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false,
    configureWebpack: (config) => {
        config.plugins.forEach((val) => {
            if (val instanceof HtmlWebpackPlugin) {
                val.options.title = '数据大屏展示';
            }
        })
    },
    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/checkWork': {
                target: 'http://tm.lilanz.com/oa/api/checkOutCore.ashx',
                changeOrigin: true
            },
        }
    }
}