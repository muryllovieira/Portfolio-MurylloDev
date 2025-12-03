import { motion } from 'framer-motion';
import { Award, Bot, CloudCog, Code } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', level: 100 },
    { name: 'TypeScript', level: 100 },
    { name: 'Kotlin', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'UX/UI Design', level: 100 },
  ];

  const certifications = [
    {
      icon: Code,
      number: 'Formação React Native Developer',
      label: 'DIO',
    },
    {
      icon: CloudCog,
      number: 'Implantação de Serviços em Nuvem',
      label: 'Microsoft AZ-900',
    },
    {
      icon: Bot,
      number: 'Cisco IT Essencial',
      label: 'Cisco',
    },
    {
      icon: Award,
      number: 'Técnico de Desenvolvimento de Sistemas',
      label: 'Senai Jandira',
    },
  ];

  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-16 lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                <span className="gradient-text">Sobre Mim</span>
              </h2>

              <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Olá! Me chamo Muryllo Vieira e sou desenvolvedor com mais de 3
                  anos de experiência na criação de aplicações web modernas,
                  responsivas e acessíveis. Formado como Técnico em
                  Desenvolvimento de Sistemas pelo SENAI Jandira, atualmente
                  atuo como estagiário de desenvolvimento de sistemas, aplicando
                  diariamente minhas habilidades em projetos reais.
                </p>

                <p>
                  Minha especialização está em JavaScript, TypeScript, React e
                  Next.js, com forte foco em qualidade de código através de
                  testes unitários e de integração. Também possuo conhecimento
                  em desenvolvimento mobile utilizando React Native e Kotlin,
                  sempre buscando criar experiências fluidas e de alto
                  desempenho.
                </p>

                <p>
                  Além das competências técnicas, tenho experiência em liderança
                  técnica, coordenação de equipes e aplicação de metodologias
                  ágeis para otimizar processos e garantir entregas
                  consistentes. Sou comunicativo, responsável e movido por
                  desafios que me permitam crescer como profissional.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                Principais Competências
              </h3>
              <div className="space-y-3 md:space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-medium text-gray-700 text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-xs md:text-sm text-emerald-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div className="relative w-full">
              <div className="relative z-10 bg-white p-2 sm:p-3 md:p-4 rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
                <img
                  alt="Foto profissional do desenvolvedor"
                  className="w-full h-48 sm:h-56 md:h-72 lg:h-80 object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d"
                />
              </div>

              <div className="hidden sm:block absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full opacity-10 blur-2xl"></div>
            </div>

            {/* Certifications Grid */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                Certificações
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {certifications.map((certification, index) => (
                  <motion.div
                    key={certification.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-emerald-50 to-white p-4 md:p-6 rounded-xl border border-emerald-100 text-center"
                  >
                    <certification.icon
                      className="w-6 md:w-8 h-6 md:h-8
                    text-emerald-600 mx-auto mb-2 md:mb-3"
                    />
                    <div className="text-sm md:text-base font-bold text-gray-900 mb-1 line-clamp-2">
                      {certification.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {certification.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
