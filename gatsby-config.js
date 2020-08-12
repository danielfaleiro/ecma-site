// gatsy-config.js
const path = require('path')
module.exports = {
  siteMetadata: {
    title: 'ECMA',
    description: 'Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer em um único lugar. Conheça também nosso Espaço Relaxar.'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Espaço ECMA',
        short_name: 'ECMA',
        description: 'Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer em um único lugar. Conheça também nosso Espaço Relaxar.',
        lang: 'pt_BR',
        display: 'standalone',
        icon: 'src/images/icon.png',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
