import React from 'react'
import { GoEye, GoStar, GoHeart } from 'react-icons/lib/go'
import './IconCard.css'

const IconCard = ({ icon, title, text, size }) => {
  const createIcon = () => {
    switch (icon) {
      case 'eye':
        return <GoEye className='color-ecma-gold' size={size}/>
      case 'star':
        return <GoStar className='color-ecma-gold' size={size} />
      case 'heart':
        return <GoHeart className='color-ecma-gold' size={size} />
      default:
        return <p>Invalid Icon</p>
    }
  }

  return (
    <div className='icon-card flex justify-between items-center flex-column'>
      {createIcon()}
      <h3 className='color-ecma-gold'>{title}</h3>
      <p className='tc roboto icon-card-text'>{text}</p>
    </div>
  )
}

export default IconCard
