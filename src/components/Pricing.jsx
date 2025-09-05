import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const valores = [
    {
      name: 'Starter',
      price: 'R$ 849',
      period: 'a partir de',
      description: 'Perfeito para pequenos negócios que precisam de presença digital profissional.',
      features: [
        'Site institucional responsivo',
        'Até 5 páginas otimizadas',
        'Formulário de contato',
        'Integração com redes sociais',
        'SEO básico configurado',
        'SSL e segurança básica',
        'Suporte por 7 dias'
      ],
      highlighted: false,
      deliveryTime: '7-10 dias úteis',
      badge: null
    },
    {
      name: 'Profissional',
      price: 'R$ 1.090',
      period: 'a partir de',
      description: 'Solução completa para empresas que querem se destacar e converter mais.',
      features: [
        'Site profissional customizado',
        'Até 10 páginas otimizadas',
        'Área administrativa completa',
        'Analytics e relatórios',
        'Chat online integrado',
        'Backup automático',
        'Suporte por 10 dias'
      ],
      highlighted: true,
      deliveryTime: '10-15 dias úteis',
      badge: 'Mais Popular'
    },
    {
      name: 'Loja Pro',
      price: 'R$ 1.590',
      period: 'a partir de',
      description: 'E-commerce completo para vender online com todas as funcionalidades.',
      features: [
        'Loja virtual WooCommerce',
        'Catálogo ilimitado de produtos',
        'Múltiplos meios de pagamento',
        'Gestão de estoque automática',
        'Cupons e promoções',
        'Relatórios de vendas',
        'Integração com marketplaces',
        'Suporte por 12 dias'
      ],
      highlighted: false,
      deliveryTime: '15-20 dias úteis',
      badge: 'E-commerce'
    }
  ];

  const handlePlanSelection = (planName) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitar na sua próxima mensagem! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="valores" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Valores que <span className="gradient-text">Cabem no seu Bolso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Investimento transparente com resultados garantidos. 
            Escolha o plano ideal para o seu negócio e comece a vender mais hoje mesmo.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Valores podem variar conforme escopo</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-2xl ${
                valor.highlighted 
                  ? 'border-2 border-emerald-500 shadow-xl scale-105' 
                  : 'border border-gray-200 hover:border-emerald-300'
              }`}>
                {valor.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {valor.badge}
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {valor.name}
                  </CardTitle>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold gradient-text">{valor.price}</span>
                    </div>
                    <p className="text-sm text-gray-500">{valor.period}</p>
                  </div>

                  <p className="text-gray-600 text-sm">{valor.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {valor.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
                      <Zap className="w-4 h-4 text-emerald-500" />
                      <span>Prazo: {valor.deliveryTime}</span>
                    </div>
                    
                    <Button
                      onClick={() => handlePlanSelection(valor.name)}
                      className={`w-full py-3 font-semibold transition-all duration-300 ${
                        valor.highlighted
                          ? 'btn-primary text-white'
                          : 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50'
                      }`}
                      variant={valor.highlighted ? 'default' : 'outline'}
                    >
                      Quero este plano
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Shield,
              title: 'Garantia de Qualidade',
              description: 'Revisões ilimitadas até sua total satisfação'
            },
            {
              icon: Zap,
              title: 'Entrega no Prazo',
              description: 'Cumprimos rigorosamente os prazos acordados'
            },
            {
              icon: Star,
              title: 'Suporte Incluso',
              description: 'Suporte técnico gratuito após o lançamento'
            }
          ].map((guarantee, index) => (
            <div key={guarantee.title} className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{guarantee.title}</h3>
              <p className="text-sm text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Não encontrou o plano ideal? Vamos criar uma proposta personalizada para você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://wa.me/5511933285377', '_blank')}
              variant="outline"
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3"
            >
              Falar no WhatsApp
            </Button>
            <Button
              onClick={() => document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-white px-8 py-3"
            >
              Solicitar Orçamento Personalizado
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;