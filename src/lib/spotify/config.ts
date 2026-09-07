export const SPOTIFY_CONFIG = {
  showId: process.env.SPOTIFY_SHOW_ID || '0t90ErLv9l0uVcRhh4lXD6',
  clientId: process.env.SPOTIFY_CLIENT_ID || '',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
  baseUrl: 'https://api.spotify.com/v1',
  authUrl: 'https://accounts.spotify.com/api/token',
} as const;

export const SERMONS_CONFIG = {
  episodesToFetch: 5,
  revalidateSeconds: 900,
} as const;
