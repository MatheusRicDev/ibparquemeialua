import { SPOTIFY_CONFIG, SERMONS_CONFIG } from './config';
import type { SpotifyTokenResponse, SpotifyShowEpisodesResponse } from './types';

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token;
  }

  const { clientId, clientSecret, authUrl } = SPOTIFY_CONFIG;

  if (!clientId || !clientSecret) {
    throw new Error('Spotify credentials not configured');
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(authUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`Spotify auth failed: ${response.status}`);
  }

  const data: SpotifyTokenResponse = await response.json();

  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return data.access_token;
}

export async function fetchShowEpisodes(limit: number): Promise<SpotifyShowEpisodesResponse> {
  const token = await getAccessToken();
  const { showId, baseUrl } = SPOTIFY_CONFIG;

  const response = await fetch(
    `${baseUrl}/shows/${showId}/episodes?limit=${limit}&market=BR`,
    {
      headers: { 'Authorization': `Bearer ${token}` },
      next: { revalidate: SERMONS_CONFIG.revalidateSeconds },
    }
  );

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status}`);
  }

  return response.json();
}
