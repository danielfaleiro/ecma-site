import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO ({ description, title, url, ogTitle, ogDescription }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const meta = []
  const image = 'https://github.com/danielfaleiro/ecma-site/blob/source/public/logo.png?raw=true'

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt_BR'
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:title',
          content: ogTitle
        },
        {
          property: 'og:description',
          content: ogDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:image:alt',
          content: 'Logo do ECMA'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: ogTitle
        },
        {
          name: 'twitter:description',
          content: ogDescription
        },
        {
          name: 'twitter:url',
          content: url
        },
        {
          name: 'twitter:image',
          content: image
        }
      ].concat(meta)}
    />
  )
}

export default SEO
