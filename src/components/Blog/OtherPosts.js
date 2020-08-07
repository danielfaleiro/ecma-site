import React from 'react'
import BlogMiniCard from './BlogMiniCard'
import posts from '../../data/blog/posts/posts.json'

const OtherPosts = ({ currentId }) => {
  const maxPosts = 4
  let miniCards = null
  if (posts) {
    const size = posts.length >= maxPosts + 1 ? maxPosts + 1 : posts.length
    miniCards = posts.slice(0, size).filter(post => currentId !== post.id)
    miniCards = miniCards.map(post => (
      <BlogMiniCard
        key={post.id}
        title={post.title}
        link={post.link}
        img={post.images[0]}
        description={post.description}
      />
    ))

    if (!miniCards || miniCards.length <= 0) {
      return null
    }

    if (miniCards.length > maxPosts) {
      miniCards.pop()
    }
  } else {
    return null
  }

  return (
    <section>
      <h3 style={{ marginBlockStart: '10px' }}>Outras postagens</h3>
      <div className='flex flex-wrap justify-between'>
        {miniCards}
      </div>
    </section>
  )
}

export default OtherPosts
