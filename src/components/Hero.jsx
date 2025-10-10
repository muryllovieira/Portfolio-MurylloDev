import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and tech pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 tech-pattern"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-emerald-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-lg opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>+50 projetos entregues com satisfação</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sites WordPress que{' '}
                <span className="gradient-text">destacam sua marca</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Desempenho elevado, SEO avançado e foco total em conversão. 
                Transformo sua presença digital em resultados reais.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                'Layout exclusivo',
                'Mobile-first',
                'Integração WhatsApp',
                'Checkout otimizado',
                'Métricas e Analytics',
                'SEO Avançado'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection('#contato')}
                className="btn-primary text-white px-8 py-3 text-lg"
                size="lg"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection('#portfolio')}
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Portfólio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { number: '50+', label: 'Projetos' },
                { number: '100%', label: 'Satisfação' },
                { number: '15', label: 'Dias médios' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative floating-animation">
              
             <div className="relative z-10">
                <img
                  alt="Mockup de laptop mostrando site WordPress moderno"
                  className="w-full max-w-md mx-auto"
                  src="https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-14.51.42-e1758218124265.jpeg"
                />
              </div>
          
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-10 -right-10 z-20"
              >
                <img  
                  alt="Foto Muryllo Dev"
                  className="w-52 h-auto"
                  src="https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-18-at-14.51.41-e1758218197222.jpeg"
                />
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full opacity-10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;