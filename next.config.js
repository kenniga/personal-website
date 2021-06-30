module.exports = {
    eslint: {
        dirs: ['pages', 'modules', 'components']
    },
    env: {
        MAINTENANCE_MODE: process.env.MAINTENANCE_MODE
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    }
};
