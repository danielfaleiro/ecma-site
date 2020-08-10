import React from 'react'
import './BlogSearch.css'

const BlogSearch = ({ search, setSearch }) => {
  return (
    <div className='blog-search'>
      <span>Procurar:</span>
      <input value={search} onChange={e => setSearch(e.target.value)}/>
    </div>
  )
}

export default BlogSearch
