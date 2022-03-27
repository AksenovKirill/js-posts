import './styles/App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/UI/navigation/Navigation';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
