// gatsy-config.js
const path = require('path')
module.exports = {
  siteMetadata: {
    title: 'ECMA',
    description: 'Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer em um único lugar. Conheça também nosso Espaço Relaxar.'
  },
  plugins: [
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
