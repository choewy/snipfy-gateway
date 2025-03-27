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

    await LinkApi.hit(params.linkId)
      .then((response) => {
        if (!response.data?.data?.url) {
          throw new Error();
        }

        window.location.href = response.data?.data?.url;
      })
      .catch(() => naviate('/404', { replace: true }));
  }, [naviate, params.linkId]);

  useEffect(() => {
    hitLink();
  }, [hitLink]);

  return <div></div>;
}
