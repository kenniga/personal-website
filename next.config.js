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
    },
    redirects() {
        return [
            process.env.MAINTENANCE_MODE === '1'
                ? { source: '/((?!under-construction).*)', destination: '/under-construction', permanent: false }
                : null
        ].filter(Boolean);
    }
};
