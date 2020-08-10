import React from 'react'
import './BlogCard.css'
import AnchorButton from '../AnchorButton/AnchorButton'

const BlogCard = ({ title, date, description, image, link, author }) => {
  return (
    <div className='blog-card'>
      <h3 className='blog-card-title'>{title}</h3>
      <span className='blog-card-date'> {author} &nbsp;&bull; {date}</span>
      <img src={image} className="blog-card-image" alt='Arte da capa do artigo' />
      <p>{description}</p>
      <AnchorButton text='Leia mais' to={link} />
    </div>
  )
}

export default BlogCard
