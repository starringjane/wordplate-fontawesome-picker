const colors = require('tailwindcss/colors');

module.exports = {
    prefix: 'sjwfp-',
    mode: 'jit',
    purge: [
        './src/**/*.{php,js,vue}',
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
