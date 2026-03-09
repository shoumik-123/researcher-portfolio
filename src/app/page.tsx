import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Expertise from '@/components/home/Expertise';
import Education from '@/components/home/Education';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Mentors from '@/components/home/Mentors';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Expertise />
      <Education />
      <FeaturedProjects />
      <Mentors />
    </>
  );
}