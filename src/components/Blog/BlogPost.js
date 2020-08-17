import React from 'react'
import Anchor from '../Anchor/Anchor'
import links from '../../links'
import './BlogPost.css'
import Tags from './Tags'
import OtherPosts from './OtherPosts'
import findBlog from '../../utils/findBlog'

const BlogPost = ({ children, title, date, author, tags, id }) => {
  const previous = findBlog(id - 1)
  const next = findBlog(id + 1)

  return (
    <div className='min-max-width center flex-column blog-post'>
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
      {(previous || next) &&
        <hr style={{ width: '100%', marginTop: '20px' }}/>
      }
      <ul className='flex flex-wrap justify-between list'>
        <li>
          {previous &&
            <Anchor to={previous.link}>
              &lt; {previous.title}
            </Anchor>
          }
        </li>
        <li>
          {next &&
            <Anchor to={next.link}>
              {next.title} &gt;
            </Anchor>
          }
        </li>
      </ul>
    </div>
  )
}

export default BlogPost
