import React from 'react'
import SEO from '../../components/SEO/SEO'
import Page from '../../components/Page/Page'
import findBlog from '../../utils/findBlog'
import loadable from '@loadable/component'
import Loading from '../../components/Loading/Loading'

const BlogPost = loadable(() => import('../../components/Blog/BlogPost'), {
  fallback: <Loading />
})
const Article = loadable(() => import('../../data/blog/posts/impacto-femoroacetabular'), {
  fallback: <Loading />
})

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
  } = findBlog(1)
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
