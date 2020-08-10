import React, { useState } from 'react'
import Title from '../PageElements/Title'
import BlogCard from './BlogCard'
import posts from '../../data/blog/posts/posts.json'
import WithLocation from '../WithLocation/WithLocation'
import BlogSearch from './BlogSearch'

const filterPosts = (filter) => {
  const filterLower = filter.toLowerCase()
  const filteredPosts = posts.filter(post => {
    const tagsLower = post.tags.map(tag => tag.toLowerCase())
    return tagsLower.find(tag => tag.includes(filterLower)) ||
      post.title.toLowerCase().includes(filterLower)
  })
  return filteredPosts
}

const Blog = ({ search }) => {
  const title = <Title>Blog</Title>
  const { tag } = search
  const [filter, setFilter] = useState(tag || '')
  const postsToShow = filter
    ? filterPosts(filter)
    : posts

  const blogCardList = postsToShow.length === 0
    ? <p style={{ margin: '20px' }}>Nenhum resultado encontrado.</p>
    : postsToShow.map(post =>
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
    </div>
  )
}

export default WithLocation(Blog)
