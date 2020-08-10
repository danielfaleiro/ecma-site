import React from 'react'
import Title from '../PageElements/Title'
import BlogCard from './BlogCard'
import posts from '../../data/blog/posts/posts.json'
import WithLocation from '../WithLocation/WithLocation'
import AnchorButton from '../AnchorButton/AnchorButton'
import links from '../../links'

const Blog = ({ search }) => {
  const title = <Title>Blog</Title>
  const { tag } = search
  const postsToShow = tag
    ? posts.filter(post => post.tags.includes(tag))
    : posts

  if (postsToShow.length === 0) {
    return (
      <div className='center flex-column items-center'>
        {title}
        <p>Nenhuma postagem encontrada com a tag {tag}.</p>
        <AnchorButton to={links.blog} text='Voltar para o Blog' />
      </div>
    )
  }
  const blogCardList = postsToShow.map(post =>
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
    <div>
      {title}
      <div className='flex flex-wrap'>
        {blogCardList}
      </div>
    </div>
  )
}

export default WithLocation(Blog)
