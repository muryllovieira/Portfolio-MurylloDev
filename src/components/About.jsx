import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Award, Users, TrendingUp, Cloud, Bot, CloudCog } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', level: 100 },
    { name: 'TypeScript', level: 90 },
    { name: 'Kotlin', level: 88 },
    { name: 'Node', level: 91 },
    { name: 'UX/UI Design', level: 100 },
  ];

  const certifications = [
    {
      icon: Code,
      number: ' Formação React Native Developer',
      label: 'DIO'
    },
    {
      icon: CloudCog,
      number: 'Implantação de Serviços em Nuvem',
      label: 'Microsoft AZ-900'
    },
    {
      icon: Bot,
      number: 'Cisco IT Essencial',
      label: 'Cisco'
    },
    {
      icon: Award,
      number: 'Técnico de Desenvolvimento de Sistemas ',
      label: 'Senai Jandira'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">Sobre Mim</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Olá! Me chamo Muryllo Vieira e sou desenvolvedor com mais de 3 anos de experiência na criação de aplicações web modernas, responsivas e acessíveis. Formado como Técnico em Desenvolvimento de Sistemas pelo SENAI Jandira, atualmente atuo como estagiário de desenvolvimento de sistemas, aplicando diariamente minhas habilidades em projetos reais.​

                </p>
                
                <p>
                  Minha especialização está em JavaScript, TypeScript, React e Next.js, com forte foco em qualidade de código através de testes unitários e de integração. Também possuo conhecimento em desenvolvimento mobile utilizando React Native e Kotlin, sempre buscando criar experiências fluidas e de alto desempenho.​

                </p>
                
                <p>
                  Além das competências técnicas, tenho experiência em liderança técnica, coordenação de equipes e aplicação de metodologias ágeis para otimizar processos e garantir entregas consistentes. Sou comunicativo, responsável e movido por desafios que me permitam crescer como profissional.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Principais Competências</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-emerald-600 font-semibold">{skill.level}%</span>
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

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
                <img  
                  alt="Foto profissional do desenvolvedor WordPress especialista"
                  className="w-full h-80 object-cover rounded-xl"
                 src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full opacity-10 blur-2xl"></div>
            </div>

            {/* Certifications Grid */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">Certificações</h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 text-center"
                >
                  <certification.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {certification.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {certification.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;