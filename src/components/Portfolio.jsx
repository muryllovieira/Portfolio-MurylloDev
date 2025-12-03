import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, GitFork, Github, Star } from 'lucide-react';
import useGitHubProjects from '../hooks/useGithub';

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
  python: 'devicon-python-plain',
  java: 'devicon-java-plain',
  go: 'devicon-go-original',
  rust: 'devicon-rust-plain',
  css3: 'devicon-css3-plain',
  postgresql: 'devicon-postgresql-plain',
  mongodb: 'devicon-mongodb-plain',
  docker: 'devicon-docker-plain',
};

const TechIcon = ({ name }) => {
  const normalized = name.toLowerCase();
  const iconClass = techIconMap[normalized];

  if (!iconClass) return null;

  return <i className={`${iconClass} text-base mr-2 text-emerald-600`}></i>;
};

const Portfolio = () => {
  const localProjects = [
    {
      id: 1,
      title: 'Costuriê',
      category: 'Web & Mobile',
      niche: 'Aplicativo e Website para Costureiras',
      image:
        'https://muryllovieira.com.br/Gemini_Generated_Image_bqvrvvbqvrvvbqvr.png',
      description:
        'Desenvolvimento de uma aplicação web e mobile para costureiras gerenciarem pedidos de forma eficiente.',
      stack: ['React', 'Kotlin', 'HTML5', 'JavaScript', 'Axios'],
      metrics: {
        before: 'Carregamento lento, baixo desempenho (Score 55%)',
        after: 'Performance A+, carregamento < 2s (Score 98%)',
      },
      isLocal: true,
    },
    {
      id: 2,
      title: 'Sistema de Medicamentos',
      category: 'Dashboard/Admin',
      niche: 'Interface de Gerenciamento',
      image:
        'https://muryllovieira.com.br/Gemini_Generated_Image_tfnb2ytfnb2ytfnb.png',
      description:
        'Desenvolvimento de uma interface de administrador complexa e acessível seguindo as diretrizes WCAG.',
      stack: ['Vue.js', 'TypeScript', 'Tailwind', 'React'],
      metrics: {
        before: 'Design confuso, inacessível (Score 30%)',
        after: 'Usabilidade aprimorada, Acessibilidade AA+',
      },
      isLocal: true,
    },
    {
      id: 3,
      title: 'Monitoramento de Saúde',
      category: 'Aplicativo',
      niche: 'Sistema de Monitoramento',
      image:
        'https://muryllovieira.com.br/Gemini_Generated_Image_vh466qvh466qvh46.png',
      description:
        'Aplicativo focado em monitoramento de saúde com alta performance e responsividade.',
      stack: ['React Native', 'TypeScript', 'Axios', 'Atomic Design'],
      metrics: {
        before: 'Primeiro Conteúdo Significativo > 4s',
        after: 'Tempo para Interagir (TTI) < 1.5s',
      },
      isLocal: true,
    },
    {
      id: 4,
      title: 'Baterias Booking',
      category: 'Landing Page',
      niche: 'Portífólio de Loja',
      image: 'https://muryllovieira.com.br/2025-09-05_13-31.png',
      description:
        'Página de aterrissagem focada em conversão, com layout totalmente responsivo para todos os dispositivos.',
      stack: ['HTML5', 'Wordpress', 'TypeScript'],
      metrics: {
        before: 'Layout quebrava no mobile',
        after: 'Responsividade testada e aprovada em 100% dos dispositivos.',
      },
      isLocal: true,
    },
    {
      id: 5,
      title: 'TaskScream',
      category: 'Web & Mobile',
      niche: 'Gerenciamento de Projetos',
      image:
        'https://muryllovieira.com.br/51c2c0f7-fca9-477b-894e-d7cdc3b422b1.png',
      description:
        'Uma ferramenta visual de gerenciamento de projetos e tarefas para organizar o trabalho de forma colaborativa.',
      stack: ['React Native', 'TypeScript', 'Axios', 'React', 'Atomic Design'],
      metrics: {
        before: 'Renderização lenta de gráficos',
        after: 'Taxa de atualização de dados em tempo real, sem lag.',
      },
      isLocal: true,
    },
    {
      id: 6,
      title: 'Joalheria Online',
      category: 'PWA',
      niche: 'Loja Virtual de Joias',
      image: 'https://muryllovieira.com.br/Desktop-1.png',
      description:
        'Transformação em Progressive Web App (PWA) para acesso instantâneo.',
      stack: ['Tailwind', 'React', 'HTML5', 'Axios'],
      metrics: {
        before: 'Acesso apenas online',
        after: 'Disponível offline, com Service Worker implementado.',
      },
      isLocal: true,
    },
  ];

  const GITHUB_USERNAME = 'muryllovieira';

  const {
    gitHubUser,
    gitHubRepos,
    loading: loadingGitHub,
    error: errorGitHub,
  } = useGitHubProjects(GITHUB_USERNAME);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-16 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 tech-pattern -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-emerald-200 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-lg opacity-40"
        />
      </div>

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

        {/* REPOSITÓRIOS EM DESTAQUE */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-1 h-8 bg-emerald-600 rounded"></span>
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {localProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      alt={`Projeto ${project.title} - ${project.niche}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      src={project.image}
                    />
                    <span className="absolute top-3 right-3 text-xs font-semibold bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>

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

        {/* REPOSITÓRIOS DO GITHUB */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Github className="w-6 h-6 text-gray-900" />
            Repositórios no GitHub
          </h3>

          {loadingGitHub ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
            </div>
          ) : errorGitHub ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-800 font-medium">
                Erro ao carregar repositórios: {errorGitHub}
              </p>
            </div>
          ) : (
            <>
              {gitHubUser && (
                <div className="mb-10 flex items-center gap-4">
                  <img
                    src={gitHubUser.avatar}
                    alt={gitHubUser.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">
                      {gitHubUser.name}
                    </p>
                    <a
                      href={gitHubUser.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-emerald-600 transition duration-150 flex items-center gap-1"
                    >
                      https://github.com/{gitHubUser.login}{' '}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {gitHubRepos.map((repo, index) => (
                    <motion.div
                      key={repo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div className="flex flex-col flex-grow">
                        <a
                          href={repo.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors flex items-center gap-2"
                        >
                          {repo.title}
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>

                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {repo.description}
                        </p>
                      </div>

                      <div className="flex items-end justify-between pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          {repo.stack.length > 0 && (
                            <span className="flex items-center">
                              <TechIcon name={repo.stack[0]} />
                              {repo.stack[0]}
                            </span>
                          )}

                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-gray-400" />
                            {repo.stats.stars}
                          </span>

                          <span className="flex items-center gap-1">
                            <GitFork className="w-4 h-4 text-gray-400" />
                            {repo.stats.forks}
                          </span>
                        </div>

                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {repo.stats.updated_at}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
          <div className="absolute -top-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl -z-10"></div>
          <div className="absolute -bottom-10 w-32 h-32 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full opacity-10 blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
