import React from 'react'
import img from '../../asset/img/privacy/Group 102.png'
import './Privacy.css'

const Privacy = () => {
  return (
    <>
      <div className='privacy'>
        <div className='container '>
        </div>
      </div>

      {/* mobile view */}
      <div style={{display:'none'}} className='privacy2'>
        <img src={img} alt="" />
      </div>
    </>
  )
}

export default Privacy