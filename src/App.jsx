import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import { Toaster } from '@/components/ui/toaster';
import { Helmet } from 'react-helmet';
import TechnicalSection from './components/Technical';

function App() {
  return (
    <>
      <Helmet>
        <title>Portfólio - Muryllo Vieira</title>
        <meta
          name="description"
          content="Desenvolvedor Front-end & Mobile especializado em React, React Native e TypeScript. Crio interfaces modernas, performáticas e focadas na experiência do usuário."
        />
        <meta property="og:title" content="Portfólio - Muryllo Vieira" />
        <meta
          property="og:description"
          content="Desenvolvedor Front-end & Mobile especializado em React, React Native e TypeScript. Crio interfaces modernas, performáticas e focadas na experiência do usuário."
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="react, react native, typescript, desenvolvimento web, nextjs, tailwind, desenvolvimento mobile, front-end, mobile, interfaces modernas, experiência do usuário"
        />
        <meta name="author" content="Muryllo Vieira" />
        <link rel="canonical" href="https://muryllovieira.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <TechnicalSection />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
