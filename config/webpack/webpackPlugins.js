const {CleanWebpackPlugin}       = require('clean-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const DefinePlugin               = require("webpack/lib/DefinePlugin");
const CopyWebpackPlugin          = require('copy-webpack-plugin');

const WebpackPlugins = () => {

    return [

        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
                                  patterns: [
                                      {from : '../public/icons/favicon',
                                          to: '../build/assets/img/favicon/'
                                      },
                                  ],
                              }),
        new MiniCssExtractPlugin({
                                     filename     : 'temp_style.css',
                                     chunkFilename: '[id].temp_style.css',
                                 }),

        new DefinePlugin({
                             'process.env.NODE_ENV': JSON.stringify("production"),
                         }),
    ];

};

module.exports = WebpackPlugins;