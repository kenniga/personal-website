module.exports = {
    eslint: {
        dirs: ['pages', 'modules', 'components']
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    }
};
