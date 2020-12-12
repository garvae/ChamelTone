const RulesOptions       = require('./config/webpack/rulesOptions');
const SassOptions        = require('./config/webpack/sassOptions');
const OptimizationConfig = require('./config/webpack/optimizationConfig');
const BabelRules         = require('./config/webpack/babelRules');
const WebpackPlugins     = require('./config/webpack/WebpackPlugins');
const path               = require('path');

const fontsExts = /\.(ttf|woff|woff2|eot)$/;
const imgExts   = /\.(png|jpe?g|gif|svg)$/;
const xmlExts   = /\.xml$/;
const jsExt     = /\.js$/;
const jsxExt    = /\.jsx$/;
const jsxPreset = '@babel/preset-react';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode   : 'production',
    entry  : {
        popup: [

            './app_popup/scripts/index.js'
        ],
        content: [

            './app_content_page/scripts/index.js'
        ],
        event: [

            './app_background_page/scripts/index.js'
        ],
    },
    output : {
        filename: 'scripts/[name].js',
        path    : path.resolve(__dirname, 'build')
    },
    plugins: WebpackPlugins(),

    optimization: OptimizationConfig(),

    devtool: false,

    module : {
        rules: [
            SassOptions,
            RulesOptions(fontsExts),
            RulesOptions(imgExts),
            RulesOptions(xmlExts),
            BabelRules(jsExt),
            BabelRules(jsxExt, jsxPreset),
        ]
    },
    cache  : false,

    node: { fs: 'empty' },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            img: path.join(__dirname, 'src/assets/img/app'),
            fonts: path.join(__dirname, 'src/assets/fonts'),
        },

    },



};