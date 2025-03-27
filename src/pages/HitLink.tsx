import { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import { LinkApi } from '../api/LinkApi';

export function HitLinkPage() {
  const naviate = useNavigate();
  const params = useParams<{ linkId: string }>();

  const hitLink = useCallback(async () => {
    if (!params.linkId) {
      return naviate('/', { replace: true });
    }

    try {
      const { data } = await LinkApi.hit(params.linkId);

      if (data.data?.url) {
        window.location.href = data.data?.url;
      }
    } catch (e) {
      return naviate('/404', { replace: true });
    }
  }, [naviate, params.linkId]);

  useEffect(() => {
    hitLink();
  }, [hitLink]);

  return <div></div>;
}
