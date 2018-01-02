var htmlwp=require('html-webpack-plugin');       //为了实现热刷新，这里需要引入
var path = require('path')
var webpack = require('webpack')    //用于访问内置插件

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')//压缩js代码

module.exports={
    entry:path.join(__dirname,'src/main.js'),
        
    output:{
        path:path.join(__dirname,"dist"),
        filename:"build.js"
    },
    module:{
        loaders:[
        {
            test:/\.css$/,                              //打包css
            loader:"style-loader!css-loader"
        },
        // {
        //     test:/\.js$/,                     //这边的配置是将es6语法转为es5语法
        //     loader:'babel-loader',
        //     exclude:/node_modules/
        // },
        {
            test:/\.vue$/,                     //这边的配置是解析.vue后缀的文件
            loader:'vue-loader',
        },
        {
            test:/\.(png|jpg|gif|ttf|svg)/,                     //这边的配置是打包url资源
            loader:'url-loader?|limit=40000',
        },
        {
            test: /vue-preview.src.*?js$/,
            loader: 'babel-loader'                             //图片预览插件
        },
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法
              ]
    },
    // babel:{
    //     presets:['es2015'],                        //es6转es5
    //     plugins:['transform-runtime']
    // },
    plugins:[
        new htmlwp({                                //实现热刷新
            title:'首页',
            filename:'index.html',
            template:"./index1.html"
        }),
        new UglifyJSPlugin({
            test: /\.js($|\?)/i,
            // include: /\//
        })
    ]
}