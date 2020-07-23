import React from 'react'
import { Link } from 'react-router-dom'
import onRouteChange from '../../events/onRouteChange'

const Anchor = (props) => {
  return (
    <Link to={props.to} onClick={onRouteChange}>
      {props.children}
    </Link>
  )
}

export default Anchor
