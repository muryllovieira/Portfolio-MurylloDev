import { motion } from 'framer-motion';
import { Code2, LayoutGrid, Lightbulb } from 'lucide-react';

const techIconMap = {
  vscode: 'devicon-vscode-plain',
  'visual studio code': 'devicon-vscode-plain',
  webstorm: 'devicon-webstorm-plain',
  'android studio': 'devicon-android-plain',
  expo: 'devicon-expo-original',
  postman: 'devicon-postman-plain',
  insomnia: 'devicon-insomnia-plain',
  figma: 'devicon-figma-plain',
  'azure devops': 'devicon-azuredevops-plain',

  react: 'devicon-react-original',
  'react native': 'devicon-react-original',
  typescript: 'devicon-typescript-plain',
  'tailwind css': 'devicon-tailwindcss-plain',
  vite: 'devicon-vite-original',
  'next.js': 'devicon-nextjs-plain',
  kotlin: 'devicon-kotlin-plain',
  git: 'devicon-git-plain',
  'framer motion': 'devicon-framermotion-original',
};

const TechIcon = ({ name }) => {
  const normalized = name.toLowerCase();
  const iconClass = techIconMap[normalized];

  if (!iconClass) return null;

  return <i className={`${iconClass} text-xl mr-2 text-emerald-500`}></i>;
};

const TechnicalSection = () => {
  const tecnologias = [
    {
      name: 'Dynamic Background',
      mainIcon: Lightbulb,
      description:
        'Com uma sólida base em desenvolvimento front-end & mobile e uma paixão por inovação, trago uma abordagem versátil para cada projeto, evoluindo constantemente para acompanhar as tendências de ponta do setor.',
      technologies: [],
    },
    {
      name: 'Software Development',
      mainIcon: LayoutGrid,
      description:
        'Com mais de 3 anos de experiência criando ativos digitais, tenho uma compreensão profunda e intuitiva de como as interfaces dos melhores produtos de software do mundo são projetadas.',
      technologies: [
        'VSCODE',
        'WEBSTORM',
        'ANDROID STUDIO',
        'EXPO',
        'POSTMAN',
        'INSOMNIA',
        'FIGMA',
        'AZURE DEVOPS',
      ],
    },
    {
      name: 'Technologies & Tools',
      mainIcon: Code2,
      description:
        'Encontro grande satisfação em resolver desafios complexos de codificação, especializando-me em soluções front-end & mobile e APIs. Cada projeto representa uma oportunidade para inovar e entregar soluções de alta qualidade.',
      technologies: [
        'REACT',
        'TYPESCRIPT',
        'TAILWIND CSS',
        'VITE',
        'NEXT.JS',
        'REACT NATIVE',
        'KOTLIN',
        'Git',
        'Framer Motion',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="technical"
      className="py-20 bg-gray-950 relative overflow-hidden min-h-screen flex items-center"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(135deg, #065F46 0%, rgba(6, 95, 70, 0.3) 50%, rgba(6, 95, 70, 0) 100%)',
          backgroundImage: 'url("../src/images/dataism-24.svg")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          mixBlendMode: 'screen',
        }}
      ></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-left"
            >
              <p className="text-emerald-400 font-mono mb-4 tracking-wider uppercase text-sm">
                Hard Skills & Tools
              </p>

              <div className="relative">
                <span className="absolute -top-4 left-0 text-7xl md:text-9xl font-bold text-emerald-500/10 blur-2xl select-none">
                  Technical
                </span>
                <h2 className="relative text-5xl md:text-7xl font-bold text-white mb-6">
                  Technical
                </h2>
              </div>

              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                Como tecnólogo criativo, desenvolvo experiências digitais
                intuitivas utilizando um conjunto diversificado de ferramentas e
                linguagens, focando em robustez e inovação.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-col gap-6"
            >
              {tecnologias.map((tech, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="group relative bg-gray-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:bg-gray-900/60 hover:border-emerald-500/30">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-colors mb-4 md:mb-0">
                        <tech.mainIcon className="w-8 h-8 text-emerald-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                          {tech.name}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {tech.description}
                        </p>

                        {tech.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-3 mt-auto">
                            {tech.technologies.map((techName, techIndex) => (
                              <div
                                key={techIndex}
                                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-emerald-500/50 transition-all"
                              >
                                <TechIcon name={techName} />
                                {techName}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
