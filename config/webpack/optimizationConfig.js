const TerserPlugin            = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const OptimizationConfig = () => {

    return {

        splitChunks: {
            chunks: 'all'
        },
        minimizer : [
            new OptimizeCssAssetsPlugin(),

            new TerserPlugin({
                                 parallel: true,
                             }),
        ]
    };

};

module.exports = OptimizationConfig;