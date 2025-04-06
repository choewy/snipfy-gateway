import { useEffect } from 'react';

import { SNIPFY_WEB_URL } from '../persistent/config';

export function NavigateToWebPage() {
  useEffect(() => {
    window.location.href = SNIPFY_WEB_URL;
  }, []);

  return <div></div>;
}
