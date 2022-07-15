const mix = require('laravel-mix');

mix.js('resources/js/site.js', 'public/js').vue();

mix.postCss('resources/css/cp.css', 'public/vendor/app/css')

mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
]);

if (mix.inProduction()) {
   mix.version();
}
