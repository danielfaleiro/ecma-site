import React from 'react'
import Anchor from '../Anchor/Anchor'
import links from '../../links'
import './BlogPost.css'
import Tags from './Tags'
import OtherPosts from './OtherPosts'

const BlogPost = ({ children, title, date, author, tags, id }) => {
  return (
    <div className='min-max-width center blog-post'>
      <article>
        <p><Anchor to={links.blog}>&lt; Blog</Anchor></p>
        <h1 className='blog-title'>{title}</h1>
        <p className='blog-date'>Postado por {author} em {date} </p>
        <div className='blog-body'>
          <main className='blog-main'>
            {children}
          </main>
          <aside className='blog-aside'>
            <OtherPosts currentId={id} />
            <Tags tags={tags}/>
          </aside>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
