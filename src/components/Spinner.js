import React from 'react'
import spin from './spin.gif'

const Spinner = () => {

    return (
      <div className='text-center my-5'>
        <img src={spin} alt='loading' />
      </div>
    )
  }

export default Spinner
