import React from 'react'
import './BlogMiniCard.css'

const BlogMiniCard = ({ url, title, img, description }) => {
  return (
    <a href={url} className='blog-mini-card lato'>
      <img src={img} alt='Arte da capa do artigo' />
      <p><strong>{title}</strong></p>
      <p>{description}</p>
    </a>
  )
}

export default BlogMiniCard
