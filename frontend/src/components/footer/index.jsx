import React from 'react'
import './footer.css'

const index = () => {
  return (
    <div className="footer">
      <p className='footer-text'><span>Ⓒ </span> {new Date().getFullYear()}-nayanstudio</p>
    </div>
  )
}

export default index
