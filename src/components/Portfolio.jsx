import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Distribuidora',
      category: 'ecommerce',
      niche: 'Distribuição de Produtos',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-27.png',
      result: '+150% vendas online',
      description: '',
      stack: ['WordPress', 'Elementor', 'WooCommerce', 'SEO'],
      metrics: {
        before: 'Site desatualizado, baixa conversão',
        after: '150% mais vendas, 3x mais visitas'
      },
    },
    {
      id: 2,
      title: 'Cerâmica',
      category: 'ecommerce',
      niche: 'Produtos Feitos de Cerâmica',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-28.png',
      result: '+200% vendas online',
      description: '',
      stack: ['WordPress', 'WooCommerce', 'Stripe', 'SEO'],
      metrics: {
        before: 'Vendas apenas físicas',
        after: '200% aumento no faturamento total'
      },
    },
    {
      id: 3,
      title: 'Produtos Veganos',
      category: 'institucional',
      niche: 'Comércio de Cosméticos',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-29.png',
      result: '+80% leads qualificados',
      description: '',
      stack: ['WordPress', 'Custom Theme', 'SEO', 'Analytics'],
      metrics: {
        before: 'Poucos leads online',
        after: '80% mais consultas qualificadas'
      },
    },
    {
      id: 4,
      title: 'Baterias de Carros',
      category: 'landing',
      niche: 'Mercado de Varejo',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-31.png',
      result: '+120% reservas',
      description: '',
      stack: ['WordPress', 'Custom Design', 'Booking System'],
      metrics: {
        before: 'Reservas apenas por telefone',
        after: '120% mais reservas online'
      },
    },
    {
      id: 5,
      title: 'Importação de Produtos',
      category: 'institucional',
      niche: 'Importação',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-32.png',
      result: '+300% conversões',
      description: '.',
      stack: ['WordPress', 'Elementor', 'Conversion Optimization'],
      metrics: {
        before: 'Taxa de conversão 2%',
        after: 'Taxa de conversão 8%'
      },
    },
    {
      id: 6,
      title: 'Chaveiro 24h',
      category: 'landing',
      niche: 'Chaveiros',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/imagem_2025-09-18_151041083.png',
      result: '+100% de clientes',
      description: '.',
      stack: ['WordPress', 'Elementor', 'Conversion Optimization'],
      metrics: {
        before: 'Taxa de conversão 2%',
        after: 'Taxa de conversão 8%'
      },
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Projetos que <span className="gradient-text">Geram Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto é uma história de sucesso. Veja como transformei ideias em 
            sites que realmente convertem e geram resultados mensuráveis.
          </p>
        </motion.div>

        {/* Grid de projetos (sem filtros e sem modal) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Imagem */}
                <div className="relative overflow-hidden">
                  <img  
                    alt={`Projeto ${project.title} - ${project.niche}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    src={`${project.image}`}
                  />
                  
                </div>

                {/* Corpo */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-emerald-600 font-medium">{project.niche}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>

                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-semibold">{project.result}</span>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Gostou dos resultados? Seu projeto pode ser o próximo case de sucesso!
          </p>
          <Button
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-white px-8 py-3 text-lg"
            size="lg"
          >
            Quero Meu Projeto
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
