const path = require('path')
module.exports = {
    title: 'Hoagie UI Guide',
    components: 'src/components/**/index.tsx',
    styleguideDir: 'docs',
    skipComponentsWithoutExample: true,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/components/Theme')
    },
    require: [
        path.join(__dirname, 'src/components/Theme/Theme.module.css'),
        path.join(__dirname, 'src/components/theme.css')
    ],
    theme: {
        color: {
            link: "#8F59EF",
            linkHover: "#6C47AE"
        },
        fontFamily: {
            base: '"Inter", sans-serif'
        },
    },
};