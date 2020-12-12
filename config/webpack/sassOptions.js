const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SassOptions = {
    test: /\.(sa|sc|c)ss$/,
    use : [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'resolve-url-loader',
        'sass-loader',
    ],
};

module.exports =  SassOptions;