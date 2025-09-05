import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'WordPress', level: 95 },
    { name: 'WooCommerce', level: 90 },
    { name: 'SEO', level: 88 },
    { name: 'UX/UI Design', level: 92 },
    { name: 'PageSpeed', level: 91 },
  ];

  const achievements = [
    {
      icon: Users,
      number: '50+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: Code,
      number: '50+',
      label: 'Projetos Entregues'
    },
    {
      icon: TrendingUp,
      number: '150%',
      label: 'Média de Crescimento'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Taxa de Satisfação'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
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
                Especialista em <span className="gradient-text">WordPress</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sou especialista em WordPress, WooCommerce e performance web. 
                  Com mais de 2 anos de experiência, transformo ideias em sites rápidos, 
                  seguros e preparados para vender.
                </p>
                
                <p>
                  Minha missão é simples: criar sites que não apenas impressionam visualmente, 
                  mas que realmente convertem visitantes em clientes. Cada projeto é desenvolvido 
                  com foco em resultados mensuráveis e crescimento sustentável do seu negócio.
                </p>
                
                <p>
                  Trabalho com metodologia comprovada, utilizando as melhores práticas de SEO, 
                  UX/UI e performance para garantir que seu investimento gere retorno real.
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

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Code, text: 'WordPress Expert' },
                { icon: Zap, text: 'Performance Specialist' },
                { icon: Shield, text: 'Security Certified' }
              ].map((cert, index) => (
                <div key={cert.text} className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <cert.icon className="w-4 h-4" />
                  <span>{cert.text}</span>
                </div>
              ))}
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

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 text-center"
                >
                  <achievement.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.label}
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