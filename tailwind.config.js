module.exports = {
    purge: [],
    darkMode: 'media',
    variants: {
        extend: {},
    },
    theme: {
        extend: {
            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ]
}