module.exports = {
    eslint: {
        dirs: ['pages', 'modules', 'components']
    },
    env: {
        MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
        NEXT_PUBLIC_DASHBOARD_URL: process.env.NEXT_PUBLIC_DASHBOARD_URL
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    }
};
