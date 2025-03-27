import { useEffect } from 'react';

import { LINK_FORCE_WEB_URL } from '../persistent/config';

export function NavigateToWebPage() {
  useEffect(() => {
    window.location.href = LINK_FORCE_WEB_URL;
  }, []);

  return <div></div>;
}
