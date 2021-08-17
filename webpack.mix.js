/**
 * Dependencies
 */
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/**
 * Assets
 */
mix.js('src/assets/index.js', './dist').vue();
mix.js('src/assets/icon-picker.js', './dist').vue();
mix.postCss('src/assets/style.css', './dist', [
    tailwindcss,
]);
