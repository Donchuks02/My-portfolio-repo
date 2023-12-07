/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./script.js"],
    theme: {
        extend: {},
        colors: {
            'black': '#000000',
            'dark-gray': '#3c3b3b',
            'sandcastle': '#e0bc81',
            'light-sandcastle': '#faf9d8',
            'light-gray': '#dedede',

        },
        fontFamily: {
            poppins: ['Poppins', ' sans-serif'],
        },
        //         backgroundImage: {
        //             'hero-image': "url('./img/CityJs-17_3.webp')",
        //
        //         },


    },
    plugins: [],
}