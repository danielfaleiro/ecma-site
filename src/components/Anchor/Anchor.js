import React from 'react'
import { Link } from 'gatsby'
import onRouteChange from '../../events/onRouteChange'

const Anchor = (props) => {
  return (
    <Link to={props.to} onClick={onRouteChange} className={props.className}>
      {props.children}
    </Link>
  )
}

export default Anchor
