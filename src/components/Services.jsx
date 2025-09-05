import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Zap, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Site Institucional',
      description: 'Sites profissionais que transmitem credibilidade e convertem visitantes em clientes.',
      features: [
        'Design responsivo e moderno',
        'Páginas otimizadas para velocidade',
        'Blog integrado para SEO',
        'Formulários de contato',
        'Integração com redes sociais'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Loja Virtual (WooCommerce)',
      description: 'E-commerce completo com todas as funcionalidades para vender online.',
      features: [
        'Catálogo de produtos organizado',
        'Carrinho e checkout otimizado',
        'Múltiplos meios de pagamento',
        'Gestão de estoque automática',
        'Relatórios de vendas detalhados'
      ]
    },
    {
      icon: Zap,
      title: 'Otimização & SEO',
      description: 'Performance máxima e visibilidade nos mecanismos de busca.',
      features: [
        'Core Web Vitals otimizados',
        'SEO on-page completo',
        'Schema markup estruturado',
        'Compressão de imagens',
        'Cache e CDN configurados'
      ]
    },
    
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços que <span className="gradient-text">Transformam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em WordPress para levar seu negócio ao próximo nível. 
            Da criação à manutenção, cuidamos de tudo para você focar no que importa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para transformar sua presença digital?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido sob medida para suas necessidades específicas. 
              Vamos conversar sobre como posso ajudar seu negócio a crescer online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/5511933285377', '_blank')}
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Falar no WhatsApp
              </button>
              <button
                onClick={() => document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;