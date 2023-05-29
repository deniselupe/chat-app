/** @type {import('next').NextConfig} */

module.exports = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: {not: /\.(css|scss|sass)$/},
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                loader: '@svgr/webpack',
                options: {
					dimensions: false,
					titleProp: true,
				},
            },
        )

        fileLoaderRule.exclude = /\.svg$/i

        return config
    },
}