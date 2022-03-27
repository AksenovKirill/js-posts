import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import { AuthContext } from '../context/context';
import {privateRoutes, publicRoutes} from '../router/routers';

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
