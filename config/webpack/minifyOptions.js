
const MinifyOptions = () => {

    const minifyConfig   = {
        collapseWhitespace: true,
        removeComments               : true,
        removeRedundantAttributes    : true,
        useShortDoctype              : true,
        removeEmptyAttributes        : true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash             : true,
        minifyJS                     : true,
        minifyCSS                    : true,
        minifyURLs                   : true,
    };

    return minifyConfig;
};

module.exports = MinifyOptions;

