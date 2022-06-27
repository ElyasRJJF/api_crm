import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='text-start my-3 text-red-600 p-2'>
        {children}
    </div>
  )
}

export default Alerta