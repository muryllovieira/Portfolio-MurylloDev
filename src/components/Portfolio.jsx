import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Zap, Code, Layout, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechConfig = {
    'React': { icon: Code, color: 'text-sky-500', bg: 'bg-sky-100' },
    'React Native': { icon: Code, color: 'text-sky-500', bg: 'bg-sky-100' },
    'Next.js': { icon: Zap, color: 'text-gray-900', bg: 'bg-gray-100' },
    'Atomic Design': { icon: Zap, color: 'text-green-500', bg: 'bg-green-100' },
    'Tailwind CSS': { icon: Layout, color: 'text-teal-500', bg: 'bg-teal-100' },
    'Kotlin': { icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-100' },
    'TypeScript': { icon: Code, color: 'text-blue-600', bg: 'bg-blue-100' },
    'Vue.js': { icon: Code, color: 'text-green-500', bg: 'bg-green-100' },
    'HTML5': { icon: Code, color: 'text-orange-500', bg: 'bg-orange-100' },
    'Node.js': { icon: Code, color: 'text-red-500', bg: 'bg-red-100' },
    'Axios': { icon: Code, color: 'text-red-500', bg: 'bg-red-100' },
    'Wordpress': { icon: Code, color: 'text-blue-800', bg: 'bg-purple-100' },
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Costuriê',
      category: 'Web & Mobile',
      niche: 'Aplicativo e Website para Costureiras',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/Gemini_Generated_Image_bqvrvvbqvrvvbqvr.png',
      result: 'Lighthouse Score: 98%',
      description: 'Desenvolvimento de uma aplicação web e mobile para costureiras gerenciarem pedidos de forma eficiente.',
      stack: ['React', 'Kotlin', 'HTML', 'Javascript', 'Axios'],
      metrics: {
        before: 'Carregamento lento, baixo desempenho (Score 55%)',
        after: 'Performance A+, carregamento < 2s (Score 98%)'
      },
    },
    {
      id: 2,
      title: 'Sistema de Medicamentos',
      category: 'Dashboard/Admin',
      niche: 'Interface de Gerenciamento',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/Gemini_Generated_Image_tfnb2ytfnb2ytfnb.png',
      result: 'Acessibilidade: AA+',
      description: 'Desenvolvimento de uma interface de administrador complexa e acessível seguindo as diretrizes WCAG.',
      stack: ['Vue.js', 'TypeScript', 'Tailwind', 'React'],
      metrics: {
        before: 'Design confuso, inacessível (Score 30%)',
        after: 'Usabilidade aprimorada, Acessibilidade AA+'
      },
    },
    {
      id: 3,
      title: 'Monitoramento de Saúde',
      category: 'Aplicativo',
      niche: 'Sistema de Monitoramento',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/Gemini_Generated_Image_vh466qvh466qvh46.png',
      result: 'TTI < 1.5s',
      description: 'Aplicativo focado em monitoramento de saúde com alta performance e responsividade.',
      stack: ['React Native', 'TypeScript', 'Axios', 'Atomic Design'],
      metrics: {
        before: 'Primeiro Conteúdo Significativo > 4s',
        after: 'Tempo para Interagir (TTI) < 1.5s'
      },
    },
    {
      id: 4,
      title: 'Baterias Booking',
      category: 'Landing Page',
      niche: 'Sistema de Reservas',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-31.png',
      result: 'Responsivo: 100%',
      description: 'Página de aterrissagem focada em conversão, com layout totalmente responsivo para todos os dispositivos.',
      stack: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'Bootstrap', 'Wordpress'],
      metrics: {
        before: 'Layout quebrava no mobile',
        after: 'Responsividade testada e aprovada em 100% dos dispositivos.'
      },
    },
    {
      id: 5,
      title: 'Painel de Importação',
      category: 'WebApp',
      niche: 'Visualização de Dados',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-32.png',
      result: '+300% conversões',
      description: 'Interface rica em gráficos e dados, otimizada para renderização rápida de grandes volumes de informação.',
      stack: ['Svelte', 'D3.js', 'API Rest', 'Webpack'],
      metrics: {
        before: 'Renderização lenta de gráficos',
        after: 'Taxa de atualização de dados em tempo real, sem lag.'
      },
    },
    {
      id: 6,
      title: 'Chaveiro 24h',
      category: 'PWA',
      niche: 'Serviço de Emergência',
      image: 'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/imagem_2025-09-18_151041083.png',
      result: 'Instalável Offline',
      description: 'Transformação em Progressive Web App (PWA) para acesso instantâneo e uso offline em caso de emergência.',
      stack: ['Gatsby', 'React', 'Service Workers', 'PWA Manifest'],
      metrics: {
        before: 'Acesso apenas online',
        after: 'Disponível offline, com Service Worker implementado.'
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
            Projetos de <span className="gradient-text">Desenvolvimento Front-End</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções Front-End de alto desempenho, focadas em usabilidade e performance.
          </p>
        </motion.div>


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
                  {/* Etiqueta de Categoria */}
                  <span className="absolute top-3 right-3 text-xs font-semibold bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full shadow-md">
                      {project.category}
                  </span>
                </div>


                {/* Corpo */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 font-medium">{project.niche}</span>
                  </div>


                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden">{project.description}</p>


                  <div className="flex items-center justify-between mt-4 border-t pt-4">
                    {/* Resultado Principal (Métrica Front-End) */}
                    <span className="text-lg font-bold text-emerald-600 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-1" />
                        {project.result}
                    </span>
                    
                    {/* Botão de Visualização (Exemplo de Link) */}
                    {/* <Button variant="ghost" size="sm" className="text-gray-500 hover:text-emerald-600">
                      Ver Demo <ExternalLink className="ml-2 w-4 h-4" />
                    </Button> */}
                  </div>
                  
                  {/* Seção de Stack/Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => {
                          const config = TechConfig[tech] || { icon: Code, color: 'text-gray-500', bg: 'bg-gray-200' };
                          const Icon = config.icon;
                          return (
                              <span 
                                  key={tech} 
                                  className={`flex items-center text-xs font-semibold ${config.color} ${config.bg} px-3 py-1 rounded-full`}
                              >
                                  <Icon className={`w-3 h-3 mr-1 ${config.color}`} />
                                  {tech}
                              </span>
                          );
                      })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
};


export default Portfolio;