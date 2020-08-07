import React from 'react'
import './Tags.css'

const Tags = ({ tags }) => {
  const tagList = tags
    ? tags.map(tag => <span className='blog-tag' key={tag}>
      {tag}
    </span>)
    : undefined

  return (
    <section>
      <h3>Tags</h3>
      <div className='blog-tag-list'>{tagList}</div>
    </section>
  )
}

export default Tags
