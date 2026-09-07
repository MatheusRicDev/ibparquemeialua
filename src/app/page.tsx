import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Beliefs from '@/components/Beliefs';
import CBC from '@/components/CBC';
import History from '@/components/History';
import Sermons from '@/components/Sermons';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getSermons } from '@/lib/spotify/sermons';

export default async function Home() {
  const sermons = await getSermons();

  return (
    <main>
      <Header />
      <Hero />
      <CBC />
      <Beliefs />
      <History />
      <Sermons sermons={sermons} />
      <Contact />
      <Footer />
    </main>
  );
}
