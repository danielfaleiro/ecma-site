import React from 'react'
import links from '../../links'
import Anchor from '../Anchor/Anchor'

const Index = ({ page, currentPage }) => {
  if (page === Number(currentPage)) {
    return (
      <div className='mh1'>
        {page}
      </div>
    )
  }

  return (
    <Anchor to={`${links.blog}?page=${page}`} className='mh1'>
      {page}
    </Anchor>
  )
}

const PageIndex = ({ currentPage, totalPosts }) => {
  const totalPages = Math.ceil(totalPosts / 6)

  if (!totalPosts || totalPages < 2) {
    return null
  }

  if (!currentPage) {
    currentPage = 1
  }

  const listPages = []
  for (let i = 1; i <= totalPages; i++) {
    listPages.push(<Index key={i} page={i} currentPage={currentPage} />)
  }

  return (
    <div className='center flex-wrap min-max-width mv4'>
      <strong>Páginas:</strong>  {listPages}
    </div>
  )
}

export default PageIndex
