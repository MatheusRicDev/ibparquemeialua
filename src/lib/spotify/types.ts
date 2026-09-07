export type Sermon = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
  durationFormatted: string;
  spotifyUrl: string;
};

export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type SpotifyEpisode = {
  id: string;
  name: string;
  description: string;
  images: { url: string; height: number; width: number }[];
  release_date: string;
  duration_ms: number;
  external_urls: { spotify: string };
};

export type SpotifyShowEpisodesResponse = {
  items: SpotifyEpisode[];
  next: string | null;
};
