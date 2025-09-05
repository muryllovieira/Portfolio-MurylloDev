import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>WP Expert - Sites WordPress e Lojas Virtuais que Convertem</title>
        <meta name="description" content="Desenvolvimento profissional de sites WordPress e lojas virtuais WooCommerce. SEO otimizado, design responsivo e foco em conversão. Mais de 50 projetos entregues com satisfação." />
        <meta property="og:title" content="WP Expert - Sites WordPress e Lojas Virtuais que Convertem" />
        <meta property="og:description" content="Desenvolvimento profissional de sites WordPress e lojas virtuais WooCommerce. SEO otimizado, design responsivo e foco em conversão." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="wordpress, woocommerce, desenvolvimento web, loja virtual, ecommerce, seo, sites responsivos" />
        <meta name="author" content="WP Expert" />
        <link rel="canonical" href="https://wpexpert.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Process />
          <Pricing />
          <Testimonials />
          <About />
          <CTA />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;