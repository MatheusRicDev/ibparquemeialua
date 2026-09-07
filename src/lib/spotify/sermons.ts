import { fetchShowEpisodes } from './client';
import { SERMONS_CONFIG } from './config';
import type { Sermon, SpotifyEpisode } from './types';

const fallbackSermons: Sermon[] = [
  {
    id: 'fallback-1',
    title: 'A graça que transforma',
    description: 'Uma palavra poderosa sobre a graça de Deus que transforma vidas.',
    imageUrl: 'https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?q=80&w=600&auto=format&fit=crop',
    releaseDate: '2025-09-08',
    durationFormatted: '32 min',
    spotifyUrl: 'https://open.spotify.com/show/0t90ErLv9l0uVcRhh4lXD6',
  },
  {
    id: 'fallback-2',
    title: 'Firmes na Palavra',
    description: 'Estar firmes na Palavra de Deus em todos os momentos da vida.',
    imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop',
    releaseDate: '2025-09-01',
    durationFormatted: '28 min',
    spotifyUrl: 'https://open.spotify.com/show/0t90ErLv9l0uVcRhh4lXD6',
  },
  {
    id: 'fallback-3',
    title: 'Vida em Comunhão',
    description: 'A importância da comunhão entre os irmãos na fé.',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop',
    releaseDate: '2025-08-25',
    durationFormatted: '34 min',
    spotifyUrl: 'https://open.spotify.com/show/0t90ErLv9l0uVcRhh4lXD6',
  },
  {
    id: 'fallback-4',
    title: 'Missão até os confins',
    description: 'O chamado para levar o evangelho até os confins da terra.',
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600&auto=format&fit=crop',
    releaseDate: '2025-08-18',
    durationFormatted: '26 min',
    spotifyUrl: 'https://open.spotify.com/show/0t90ErLv9l0uVcRhh4lXD6',
  },
];

function formatDuration(ms: number): string {
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutes.toString().padStart(2, '0')} min`;
  }
  return `${minutes} min`;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function normalizeEpisode(episode: SpotifyEpisode): Sermon {
  const largestImage = episode.images.sort((a, b) => b.width - a.width)[0];

  return {
    id: episode.id,
    title: episode.name,
    description: episode.description.replace(/<[^>]*>/g, '').slice(0, 200),
    imageUrl: largestImage?.url || fallbackSermons[0].imageUrl,
    releaseDate: formatDate(episode.release_date),
    durationFormatted: formatDuration(episode.duration_ms),
    spotifyUrl: episode.external_urls.spotify,
  };
}

export async function getSermons(): Promise<Sermon[]> {
  try {
    const { episodesToFetch } = SERMONS_CONFIG;
    const response = await fetchShowEpisodes(episodesToFetch);

    if (!response.items || response.items.length === 0) {
      return fallbackSermons;
    }

    const sorted = [...response.items].sort(
      (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );

    return sorted.map(normalizeEpisode);
  } catch (error) {
    console.error('[Spotify] Failed to fetch episodes:', error);
    return fallbackSermons;
  }
}
