import React from 'react'
import {Link} from 'react-router-dom';
const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='navigation__link'>
          <Link className='navigation__link-item' to='/about'>О сайте</Link>
          <Link className='navigation__link-item' to='/posts'>Посты</Link>
        </div>
      </div>
  )
}

export default Navigation
