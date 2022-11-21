import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Shopify&#169; All Rights Reserved</p>
      <p className='icons'>
        <a href='https://www.linkedin.com/in/devansh-jain-b11b9918a/' target='_blank' rel="noopener noreferrer"><AiFillLinkedin/></a>
        <a href='https://github.com/Devansh-DJ007' target='_blank' rel="noopener noreferrer"><AiFillGithub/></a>
      </p>
    </div>
  )
}

export default footer