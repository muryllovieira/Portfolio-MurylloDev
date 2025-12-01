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
        <title>Portfólio - Muryllo Dev</title>
        <meta
          name="description"
          content="Desenvolvimento profissional de sites WordPress e lojas virtuais WooCommerce. SEO otimizado, design responsivo e foco em conversão. Mais de 50 projetos entregues com satisfação."
        />
        <meta property="og:title" content="Portfólio - Muryllo Dev" />
        <meta
          property="og:description"
          content="Desenvolvimento profissional de sites WordPress e lojas virtuais WooCommerce. SEO otimizado, design responsivo e foco em conversão."
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="wordpress, woocommerce, desenvolvimento web, loja virtual, ecommerce, seo, sites responsivos"
        />
        <meta name="author" content="Muryllo Dev" />
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
