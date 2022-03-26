import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './components/UI/navigation/Navigation';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
