import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="tech-pattern w-full h-full"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-lg"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para ter um site que{' '}
            <span className="text-emerald-200">vende de verdade?</span>
          </h2>
          
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Não perca mais tempo com sites que não convertem. 
            Vamos criar juntos uma presença digital que transforma visitantes em clientes 
            e impulsiona o crescimento do seu negócio.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Projetos Entregues' },
              { number: '100%', label: 'Clientes Satisfeitos' },
              { number: '15', label: 'Dias Médios' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-emerald-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            
            <Button
              onClick={() => document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <FileText className="w-5 h-5 mr-3" />
              Solicitar Orçamento
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-emerald-200 text-sm"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span>Resposta em até 2 horas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span>Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span>Consultoria gratuita</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;