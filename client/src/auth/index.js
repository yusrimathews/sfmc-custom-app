import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import SFMC from './sfmc';

let AuthContext = React.createContext({});

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [ state, setState ] = React.useState(null);

  useEffect(() => {
    state &&
      console.log(state);
  }, [state]);

  const getToken = (payload, callback) => {
    SFMC.getToken(payload, (response) => {
      setState(prevState => ({
        ...prevState,
        'config': payload,
        'auth': response
      }));

      callback(response);
    });
  }

  const getUser = (payload, callback) => {
    SFMC.getUser(payload, (response) => {
      setState(prevState => ({
        ...prevState,
        'object': response
      }));

      callback(response);
    });
  }

  return <AuthContext.Provider value={{ state, getToken, getUser }}>{children}</AuthContext.Provider>;
}

function AuthRoute({ children }) {
  const auth = useAuth();

  if ( !auth.state ) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export { useAuth, AuthProvider, AuthRoute };
