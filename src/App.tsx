import { useState, useEffect } from 'react';
import { CONFIG } from './config';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Urgences from './components/Urgences';
import Zones from './components/Zones';
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import BottomNav from './components/BottomNav';
import MentionsLegales from './components/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Toujours revenir en haut au rechargement
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const path = window.location.pathname;
    if (path === '/mentions-legales') {
      setCurrentPage('mentions');
    } else if (path === '/politique-confidentialite') {
      setCurrentPage('politique');
    } else {
      setCurrentPage('home');
    }

    // Handle navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/mentions-legales') {
        setCurrentPage('mentions');
      } else if (path === '/politique-confidentialite') {
        setCurrentPage('politique');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          if (url.pathname === '/mentions-legales' || url.pathname === '/politique-confidentialite') {
            e.preventDefault();
            window.history.pushState({}, '', url.pathname);
            setCurrentPage(url.pathname === '/mentions-legales' ? 'mentions' : 'politique');
            window.scrollTo(0, 0);
          } else if (url.pathname === '/' && !url.hash) {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            setCurrentPage('home');
            window.scrollTo(0, 0);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const cssVars = {
    '--color-primary': CONFIG.couleurPrimaire,
    '--color-primary-light': CONFIG.couleurPrimaireLight,
    '--color-accent': CONFIG.couleurAccent,
    '--color-accent-hover': CONFIG.couleurAccentHover,
  } as React.CSSProperties;

  if (currentPage === 'mentions') {
    return (
      <div className="min-h-screen" style={cssVars}>
        <Header />
        <main>
          <MentionsLegales />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'politique') {
    return (
      <div className="min-h-screen" style={cssVars}>
        <Header />
        <main>
          <PolitiqueConfidentialite />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={cssVars}>
      <Header />
      <main>
        <Hero />
        <Services />
        {CONFIG.urgencesEnabled && <Urgences />}
        <Zones />
        <Realisations />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
      <BottomNav />
    </div>
  );
}
