const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({ 
    output: 'export',
    images: {
        unoptimized: true
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
});