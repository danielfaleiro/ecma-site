import React from 'react'
import { MdErrorOutline } from 'react-icons/lib/md'

const handleClick = () => {
  window.location.reload(false)
}

const ErrorOnLoad = () => (
  <div className='center flex-column items-center mt4'>
    <MdErrorOutline size='100' color='#957E51' />
    <h3>Não foi possível carregar essa parte do site.</h3>
    <button className='button bn' onClick={handleClick}>Recarregar a página</button>
  </div>
)

export default ErrorOnLoad
