import React from 'react'
import './BlogMiniCard.css'
import Anchor from '../Anchor/Anchor'

const BlogMiniCard = ({ link, title, img, description }) => {
  return (
    <Anchor to={link} className='blog-mini-card lato'>
      <img src={img} alt='Arte da capa do artigo' />
      <p><strong>{title}</strong></p>
      <p>{description}</p>
    </Anchor>
  )
}

export default BlogMiniCard
