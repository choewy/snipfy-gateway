import axios from 'axios';
import { useCallback, useEffect } from 'react';

import { LINK_FORCE_API_URL, LINK_FORCE_WEB_URL } from './persistent/config';

function App() {
  const getLinkForceLink = useCallback(async () => {
    const pathname = window.location.pathname.replace('/', '');

    const url = await axios
      .post(`${LINK_FORCE_API_URL}/links/${pathname}/hit`)
      .then((res) => res.data.url)
      .catch(() => LINK_FORCE_WEB_URL);

    window.location.replace(url);
  }, []);

  useEffect(() => {
    getLinkForceLink();
  }, [getLinkForceLink]);

  return <></>;
}

export default App;
