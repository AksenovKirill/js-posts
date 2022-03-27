import React, {useContext} from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import {AuthContext} from '../context/context';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  return (
    <div>
      <h1 style={{marginTop: '20px'}}>Страницы для авторизации</h1>
      <form onSubmit={login} style={{marginTop: '15px'}}>
        <MyInput type='text' placeholder='Введите логин' />
        <MyInput type='password' placeholder='Введите логин' />
        <MyButton style={{marginTop: '10px'}}>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
