import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context/context';
import MyButton from '../button/MyButton';

const Navigation = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className='navigation'>
    {isAuth
      ? <MyButton style={{marginLeft:'50px'}} onClick={logout}>Выйти</MyButton>
      : <MyButton style={{marginLeft:'50px', color:'transparent', border:'none'}} onClick={logout}>Выйти</MyButton>
      }
      <div className='navigation__link'>
        <Link className='navigation__link-item' to='/about'>
          О сайте
        </Link>
        <Link className='navigation__link-item' to='/posts'>
          Посты
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
