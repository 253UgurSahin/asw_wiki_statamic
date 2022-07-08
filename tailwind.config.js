module.exports = {
  content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans'],
                mono: ['Menlo', 'monospace']
            },
            typography: {
                DEFAULT: {
                    css: {}
                }
            },
            container: {
                center: true,
                padding: '1rem'
            },
            colors: {
                'red-asw': '#e21d38',
                'teal': '#008483',
                'teal-light': '#a6d0cf'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    important: true
}
