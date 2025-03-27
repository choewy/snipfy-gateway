import { api } from '../persistent/api';
import { ApiResponse } from '../persistent/types';

import { HitLinkResult } from './types';

export class LinkApi {
  public static async hit(linkId: string) {
    return api.post<ApiResponse<HitLinkResult>>(`links/${linkId}/hit`);
  }
}
