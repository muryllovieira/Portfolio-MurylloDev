import { AnimatePresence, motion } from 'framer-motion';

const techIconMap = {
  react: 'devicon-react-original',
  'react native': 'devicon-react-original',
  'next.js': 'devicon-nextjs-plain',
  'atomic design': 'devicon-react-original',

  typescript: 'devicon-typescript-plain',
  javascript: 'devicon-javascript-plain',

  tailwind: 'devicon-tailwindcss-plain',
  'tailwind css': 'devicon-tailwindcss-plain',

  'vue.js': 'devicon-vuejs-plain',
  vue: 'devicon-vuejs-plain',
  html5: 'devicon-html5-plain',
  kotlin: 'devicon-kotlin-plain',
  'node.js': 'devicon-nodejs-plain',
  node: 'devicon-nodejs-plain',
  wordpress: 'devicon-wordpress-plain',
  axios: 'devicon-axios-plain',
};

const TechIcon = ({ name }) => {
  const normalized = name.toLowerCase();
  const iconClass = techIconMap[normalized];

  if (!iconClass) return null;

  return <i className={`${iconClass} text-base mr-2 text-emerald-600`}></i>;
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Costuriê',
      category: 'Web & Mobile',
      niche: 'Aplicativo e Website para Costureiras',
      image:
        'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/Gemini_Generated_Image_bqvrvvbqvrvvbqvr.png',
      description:
        'Desenvolvimento de uma aplicação web e mobile para costureiras gerenciarem pedidos de forma eficiente.',
      stack: ['React', 'Kotlin', 'HTML5', 'JavaScript', 'Axios'],
      metrics: {
        before: 'Carregamento lento, baixo desempenho (Score 55%)',
        after: 'Performance A+, carregamento < 2s (Score 98%)',
      },
    },
    {
      id: 2,
      title: 'Sistema de Medicamentos',
      category: 'Dashboard/Admin',
      niche: 'Interface de Gerenciamento',
      image:
        'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/Gemini_Generated_Image_tfnb2ytfnb2ytfnb.png',
      description:
        'Desenvolvimento de uma interface de administrador complexa e acessível seguindo as diretrizes WCAG.',
      stack: ['Vue.js', 'TypeScript', 'Tailwind', 'React'],
      metrics: {
        before: 'Design confuso, inacessível (Score 30%)',
        after: 'Usabilidade aprimorada, Acessibilidade AA+',
      },
    },
    {
      id: 3,
      title: 'Monitoramento de Saúde',
      category: 'Aplicativo',
      niche: 'Sistema de Monitoramento',
      image:
        'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/Gemini_Generated_Image_vh466qvh466qvh46.png',
      description:
        'Aplicativo focado em monitoramento de saúde com alta performance e responsividade.',
      stack: ['React Native', 'TypeScript', 'Axios', 'Atomic Design'],
      metrics: {
        before: 'Primeiro Conteúdo Significativo > 4s',
        after: 'Tempo para Interagir (TTI) < 1.5s',
      },
    },
    {
      id: 4,
      title: 'Baterias Booking',
      category: 'Landing Page',
      niche: 'Portífólio de Loja',
      image:
        'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/09/2025-09-05_13-31.png',
      description:
        'Página de aterrissagem focada em conversão, com layout totalmente responsivo para todos os dispositivos.',
      stack: ['HTML5', 'Wordpress', 'TypeScript'],
      metrics: {
        before: 'Layout quebrava no mobile',
        after: 'Responsividade testada e aprovada em 100% dos dispositivos.',
      },
    },
    {
      id: 5,
      title: 'TaskScream',
      category: 'Web & Mobile',
      niche: 'Gerenciamento de Projetos',
      image:
        'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/12/51c2c0f7-fca9-477b-894e-d7cdc3b422b1.png',
      description:
        'Uma ferramenta visual de gerenciamento de projetos e tarefas para organizar o trabalho de forma colaborativa.',
      stack: ['React Native', 'TypeScript', 'Axios', 'React', 'Atomic Design'],
      metrics: {
        before: 'Renderização lenta de gráficos',
        after: 'Taxa de atualização de dados em tempo real, sem lag.',
      },
    },
    {
      id: 6,
      title: 'Joalheria Online',
      category: 'PWA',
      niche: 'Loja Virtual de Joias',
      image:
        'https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/12/Desktop-1.png',
      description:
        'Transformação em Progressive Web App (PWA) para acesso instantâneo.',
      stack: ['Tailwind', 'React', 'HTML5', 'Axios'],
      metrics: {
        before: 'Acesso apenas online',
        after: 'Disponível offline, com Service Worker implementado.',
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
            Projetos de{' '}
            <span className="gradient-text">Desenvolvimento Front-End</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções Front-End de alto desempenho, focadas em usabilidade e
            performance.
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
                    src={project.image}
                  />
                  {/* Etiqueta de Categoria */}
                  <span className="absolute top-3 right-3 text-xs font-semibold bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Corpo */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 font-medium">
                      {project.niche}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 border-t pt-4">
                    <span className="text-lg font-bold text-emerald-600 flex items-center" />
                  </div>

                  {/* Seção de Stack/Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="flex items-center text-xs font-semibold bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                      >
                        <TechIcon name={tech} />
                        {tech}
                      </span>
                    ))}
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
