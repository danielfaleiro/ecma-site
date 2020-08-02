import React from 'react'
import { Link } from 'gatsby'
import onRouteChange from '../../events/onRouteChange'

const AnchorButton = ({ to, text, className, toOutside }) => {
  if (className === undefined) {
    className = 'button lato'
  } else {
    className = className + ' button lato'
  }

  if (toOutside) {
    return (
      <a className={className} href={to}>
        {text}
      </a>
    )
  }

  return (
    <Link className={className} to={to} onClick={onRouteChange}>
      {text}
    </Link>
  )
}

export default AnchorButton
