
const RulesOptions = (ext) => {
    if (ext.toString()
           .includes('svg')) {
        return {
            test: ext,
            use : {
                loader : 'file-loader',
                options: {
                    name      : '[contenthash].[ext]',
                    outputPath: 'assets/img/app/',
                }
            },
        };
    }
    else
    if (ext.toString()
           .includes('woff2')) {
        return {
            test: ext,
            use : {
                loader : 'file-loader',
                options: {
                    name      : '[contenthash].[ext]',
                    outputPath: 'assets/fonts/',
                }
            },
        };
    }
    else {
        return {
            test   : ext,
            loader : 'file-loader',
            options: {
                name: '[contenthash].[ext]',
            },

        }
    }
};


module.exports = RulesOptions