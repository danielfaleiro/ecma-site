import React from 'react'
import SEO from '../../components/SEO/SEO'
import BlogPost from '../../components/Blog/BlogPost'
import Article from '../../data/blog/posts/impacto-femoroacetabular'
import Page from '../../components/Page/Page'
import findBlog from '../../utils/findBlog'

const ImpactoFemoroacetabular = () => {
  const {
    title,
    description,
    ogTitle,
    metaUrl,
    date,
    author,
    tags,
    id
  } = findBlog('Impacto Femoroacetabular')
  return (
    <Page>
      <SEO
        title={title}
        description={description}
        ogTitle={ogTitle}
        ogDescription={description}
        url={metaUrl}
      />
      <BlogPost
        title={title}
        date={date}
        author={author}
        tags={tags}
        id={id}
      >
        <Article />
      </BlogPost>
    </Page>
  )
}

export default ImpactoFemoroacetabular
