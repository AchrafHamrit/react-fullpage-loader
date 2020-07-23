import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const LoactionRedirect = ({ newLocation, setHide }) => {
  const location = useLocation().pathname;
  const history = useHistory();

  useEffect(() => {
    if (newLocation && newLocation !== location) {
      setHide(false);
      setTimeout(() => {
        history.push(newLocation);
        setHide(true);
      }, 2000);
    }

    // eslint-disable-next-line
  }, [newLocation]);

  return <></>;
};

export default LoactionRedirect;
