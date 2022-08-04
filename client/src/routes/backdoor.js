import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Route() {
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const auth = useAuth();

  const code = searchParams.get('code');
  const state = JSON.parse(searchParams.get('state'));
  const tssd = searchParams.get('tssd');

  useEffect(() => {
    auth.getToken({ code, ...state, tssd }, (response) => {
      auth.getUser({
        'instance': state.instance,
        'token_type': response.token_type,
        'access_token': response.access_token
      }, () => {
        navigate('/protected', { replace: true });
      });
    });

    // Run once, ignore dependency warnings
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="slds-spinner_container">
      <div role="status" className="slds-spinner slds-spinner_medium slds-spinner_brand">
        <span className="slds-assistive-text">Loading</span>
        <div className="slds-spinner__dot-a"></div>
        <div className="slds-spinner__dot-b"></div>
      </div>
    </div>
  );
}

export default Route;
