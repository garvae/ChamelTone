
const BabelRules = (ext, preset) => {

    const opts = [ '@babel/preset-env', ]

    if (preset) { opts.push(preset); }

    return {
        test   : ext,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: opts,
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-syntax-dynamic-import',
                    '@babel/plugin-syntax-jsx',
                    '@babel/plugin-transform-runtime'
                ]
            }
        }
    };
};

module.exports = BabelRules;