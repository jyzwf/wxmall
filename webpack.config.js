var webpack = require('webpack'),
      path = require('path');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/common.js');

module.exports = {
    entry:{
        build: './src/js/app.js',
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: 'js/[name].js',
      publicPath:'/dist/',
      chunkFilename: "chunk/[id].chunk.js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.scss$/, loader: 'style!css!autoprefixer!sass'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file?name=imgs/[name].[ext]'
            }
            //{ test: /\.json$/,loader:'json'}
        ]
    },
    plugins: [commonsPlugin],
    /*plugins: {
        new webpack.optimize.CommonsChunkPlugin('common.js')
    },*/
    vue: {
        loaders: {
            css: 'style!css!autoprefixer!sass'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
      
        extensions : [ '','.js' ,'.vue','.css','.scss' ]

    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}