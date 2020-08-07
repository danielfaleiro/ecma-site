import React from 'react'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'
import Blog from '../../components/Blog/Blog'

const BlogPage = () => (
  <Page>
    <SEO
      title="Blog"
      description='Saiba mais sobre saúde, fisioterapia, pilates, osteopatia, musculação e atividade física.'
      ogTitle="ECMA - Blog"
      ogDescription="Saiba mais sobre saúde, fisioterapia, pilates, osteopatia, musculação e atividade física."
      url="https://espacoecma.com.br/blog/"
    />
    <Blog />
  </Page>
)

export default BlogPage
