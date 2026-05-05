import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Questions from './components/Questions';
import Objectives from './components/Objectives';
import Impact from './components/Impact';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import Polinizador from './components/Polinizador';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Divider from './components/Divider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-concrete-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Problem />
        <Divider />
        <Questions />
        <Divider />
        <Objectives />
        <Divider />
        <Impact />
        <Divider />
        <Pillars />
        <Divider />
        <Timeline />
        <Divider />
        <Polinizador />
        <Divider />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
