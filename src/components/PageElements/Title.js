import React from 'react'

const PageTitle = (props) => {
  let className = 'tc hm-default '
  if (props.gray) {
    className = className.concat('color-ecma-gray')
  } else {
    className = className.concat('color-ecma-gold')
  }

  return (
    <h1 className={className}>
      {props.children}
    </h1>
  )
}

export default PageTitle
