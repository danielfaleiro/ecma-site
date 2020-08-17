import React, { useState } from 'react'
import Title from '../PageElements/Title'
import BlogCard from './BlogCard'
import posts from '../../data/blog/posts/posts.json'
import WithLocation from '../WithLocation/WithLocation'
import BlogSearch from './BlogSearch'
import PageIndex from './PageIndex'

const filterPosts = (filter) => {
  const filterLower = filter.toLowerCase()
  const filteredPosts = posts.filter(post => {
    const tagsLower = post.tags.map(tag => tag.toLowerCase())
    return tagsLower.find(tag => tag.includes(filterLower)) ||
      post.title.toLowerCase().includes(filterLower)
  })
  return filteredPosts
}

const getCurrentPosts = (page, totalPosts) => {
  let first, last

  if (totalPosts < 6) {
    first = 0
    last = totalPosts
  } else if (!page || page === 1) {
    first = 0
    last = 6
  } else {
    first = 6 * (page - 1)
    last = page * 6
  }

  return { first, last }
}

const Blog = ({ search }) => {
  const title = <Title>Blog</Title>
  const { tag, page } = search
  const [filter, setFilter] = useState(tag || '')
  const totalPostsToShow = filter
    ? filterPosts(filter)
    : posts
  const { first, last } = getCurrentPosts(page, totalPostsToShow.length)
  const currentPostsToShow = totalPostsToShow.slice(first, last)

  const blogCardList = currentPostsToShow.length === 0
    ? <p style={{ margin: '20px' }}>Nenhum resultado encontrado.</p>
    : currentPostsToShow.map(post =>
      <BlogCard
        key={post.id}
        title={post.title.toUpperCase()}
        date={post.date}
        author={post.author}
        description={post.description}
        image={post.images[0]}
        link={post.link}
      />
    )
  return (
    <div className='center flex-column min-max-width'>
      {title}
      <BlogSearch search={filter} setSearch={setFilter} />
      <hr style={{ width: 'calc(100% - 40px)', marginTop: '20px' }}/>
      <div className='flex flex-wrap'>
        {blogCardList}
      </div>
      <PageIndex currentPage={page} totalPosts={totalPostsToShow.length} />
    </div>
  )
}

export default WithLocation(Blog)
