import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Wesley Moraes',
      role: 'COO, Chief Operating Officer (Diretor de Operações)',
      image: 'COO, Chief Operating Officer (Diretor de Operações)',
      rating: 5,
      text: 'Meu faturamento cresceu 38% após o novo site. O processo foi ágil e o resultado ficou acima do esperado. Recomendo para qualquer empresário que quer resultados reais.',
      project: 'Site para um Sistema Financeiro',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/10/imagem_2025-10-10_150456488.png'
    },
    {
      id: 2,
      name: 'Richard Flor',
      role: 'Proprietário, Importação de Produtos',
      image: 'Proprietário, Importação de Produtos',
      rating: 5,
      text: 'O site ficou moderno, rápido e nossos clientes adoraram conhecer mais sobre a empresa.',
      project: 'Site Institucional',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/10/imagem_2025-10-10_150017361.png'
    },
    {
      id: 3,
      name: 'Caroline Portela',
      role: 'Proprietária, Produtos Veganos',
      image: 'Proprietária, Produtos Veganos',
      rating: 5,
      text: 'O site transformou nosso negócio! As vendas online dispararam e o design reflete perfeitamente nossos valores veganos. Atendimento excelente do início ao fim.',
      project: 'Site Institucional para Produtos Vegano',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/10/imagem_2025-10-10_150657796.png'
    },
    {
      id: 4,
      name: 'Cleiton Lima',
      role: 'Proprietário, Loja de Baterias',
      image: 'Proprietário, Loja de Baterias',
      rating: 5,
      text: 'Profissionalismo exemplar! O site transmite exatamente a seriedade que nossa loja precisa. Os leads qualificados aumentaram significativamente.',
      project: 'Site Institucional para Loja de Baterias',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/10/imagem_2025-10-10_151227282.png'
    },

  
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Mais de 50 projetos entregues com satisfação total. 
            Veja os depoimentos reais de quem já transformou seu negócio conosco.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.9/5 • +50 projetos entregues</span>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-emerald-200" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="mb-8">
                  <img  
                    alt={`Foto de ${testimonials[currentIndex].name}`}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                   src={testimonials[currentIndex].image} />
                  
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-emerald-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    Projeto: {testimonials[currentIndex].project}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-emerald-200 hover:bg-emerald-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-emerald-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-emerald-200 hover:bg-emerald-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Thumbnail previews */}
          <div className="hidden md:flex justify-center space-x-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                className={`relative p-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-emerald-500 ring-offset-2' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img  
                  alt={`Miniatura de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                 src={testimonial.image} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Quer ser nosso próximo case de sucesso?
          </p>
          <Button
            onClick={() => document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-white px-8 py-3 text-lg"
            size="lg"
          >
            Começar Meu Projeto
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;