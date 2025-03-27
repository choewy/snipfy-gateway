export type HitLinkResult = {
  id: string;
  type: 'free' | 'trial';
  url: string;
  expiredAt: string;
  hitCount: number;
};
