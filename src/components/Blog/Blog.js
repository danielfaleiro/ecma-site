import React from 'react'
import Title from '../PageElements/Title'
import BlogCard from './BlogCard'
import posts from '../../data/blog/posts/posts.json'

const Blog = () => {
  const blogCardList = posts.map(post =>
    <BlogCard
      key={post.id}
      title={post.title.toLocaleUpperCase()}
      date={post.date}
      author={post.author}
      description={post.description}
      image={post.images[0]}
      link={post.link}
    />
  )
  return (
    <div>
      <Title>Blog</Title>
      <div className='flex flex-wrap'>
        {blogCardList}
      </div>
    </div>
  )
}

export default Blog
