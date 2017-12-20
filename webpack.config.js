var htmlwp=require('html-webpack-plugin');       //为了实现热刷新，这里需要引入

module.exports={
    entry:'./src/main.js',
    output:{
        path:__dirname+"/dist",
        filename:"build1.js"
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
            test:/\.(png|jpg|gif|ttf)/,                     //这边的配置是打包url资源
            loader:'url-loader?|limit=40000',
        }
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
            template:"html/webpack.html"
        })
    ]
}