import { Hero } from '@/components/Hero';
import { WorkGrid } from '@/components/WorkGrid';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <WorkGrid />
      <About />
      <Contact />
    </div>
  );
}
