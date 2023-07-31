/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                homeImg:
                    "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://www.telegraph.co.uk/content/dam/eip/usa/great-escapes/beach-holidays-florida-and-south-carolina/southbeach-getty.jpg')",
                footerImg:
                    "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://www.batlleiroig.com/wp-content/uploads/2022/07/1086_14010_bershka_Ottaviano_10-scaled.jpg')",
                menCollection:
                    'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://www.apetogentleman.com/wp-content/uploads/2018/06/top-male-models.jpg")',
                womenCollection:
                    'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("https://img.freepik.com/free-photo/charming-woman-with-curly-hairstyle-make-up-studio_7502-8928.jpg")',
            },
        },
        screens: {
            xs: "500px",
            s: "909px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
