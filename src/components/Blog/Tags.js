import React from 'react'
import './Tags.css'
import Anchor from '../Anchor/Anchor'
import links from '../../links'

const Tags = ({ tags }) => {
  const tagList = tags
    ? tags.map(tag =>
      <Anchor className='blog-tag' key={tag} to={`${links.blog}/?tag=${tag}`}>
        {tag}
      </Anchor>)
    : undefined

  return (
    <section>
      <h3>Tags</h3>
      <div className='blog-tag-list'>{tagList}</div>
    </section>
  )
}

export default Tags
