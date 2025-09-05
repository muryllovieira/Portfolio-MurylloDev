import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code, Zap, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Descoberta',
      description: 'Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.',
      details: [
        'Análise do mercado e concorrência',
        'Definição de personas e jornada do usuário',
        'Levantamento de requisitos técnicos',
        'Planejamento da arquitetura da informação'
      ]
    },
    {
      icon: Palette,
      title: 'Prototipação',
      description: 'Criamos wireframes e protótipos para validar a experiência antes do desenvolvimento.',
      details: [
        'Wireframes de baixa e alta fidelidade',
        'Design system personalizado',
        'Protótipo interativo para testes',
        'Aprovação do layout final'
      ]
    },
    {
      icon: Code,
      title: 'Desenvolvimento',
      description: 'Codificamos seu site com as melhores práticas e tecnologias mais atuais.',
      details: [
        'Desenvolvimento responsivo mobile-first',
        'Integração de funcionalidades avançadas',
        'Testes de compatibilidade e performance',
        'Implementação de medidas de segurança'
      ]
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Otimizamos velocidade, SEO e conversões para máximos resultados.',
      details: [
        'Otimização de Core Web Vitals',
        'SEO da primeira página',
        'Configuração de analytics e tracking',
        'Testes A/B para conversão'
      ]
    },
    {
      icon: Rocket,
      title: 'Lançamento e Suporte',
      description: 'Colocamos seu site no ar e oferecemos suporte contínuo para seu sucesso.',
      details: [
        'Deploy em servidor otimizado',
        'Configuração de backups automáticos',
        'Treinamento para gestão do conteúdo',
        'Suporte técnico por 7 dias'
      ]
    }
  ];

  return (
    <section id="processo" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Processo de <span className="gradient-text">Desenvolvimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia testada e aprovada em mais de 50 projetos. 
            Cada etapa é cuidadosamente planejada para garantir o sucesso do seu projeto.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`text-${index % 2 === 0 ? 'left' : 'right'} lg:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                        Etapa {index + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Entrega média: 10-20 dias úteis</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Suporte por 7 dias após lançamento</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;