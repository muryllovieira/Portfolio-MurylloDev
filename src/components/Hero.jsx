import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with gradient and tech pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 tech-pattern"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <span>Desenvolvedor Front-End & Mobile</span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="gradient-text">Muryllo Vieira</span>
              </h1>
              <h1 className="text-4xl lg:text-3xl font-bold text-gray-500 leading-tight">
                <span className="text-gray-500">
                  Desenvolvedor Front-End & Mobile
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Crio interfaces modernas, performáticas e focadas na experiência
                do usuário.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                'TypeScript',
                'React.js',
                'React Native',
                'Tailwind CSS',
                'Otimização (Web/App)',
                'Git / GitHub',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="../pdf/CV - MURYLLO VIEIRA.pdf"
                class="saiba-mais"
                download
                target="_blank"
              >
                <Button
                  onClick={() => {}}
                  className="btn-primary text-white px-8 py-3 text-lg"
                  size="lg"
                >
                  Download CV
                  <Download className="w-5 h-5 ml-2" />
                </Button>
              </a>

              <Button
                variant="outline"
                onClick={() => scrollToSection('#portfolio')}
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Portfólio
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative floating-animation">
              <div className="relative z-10">
                <img
                  alt="Mockup de laptop mostrando site WordPress moderno"
                  className="w-full max-w-md mx-auto"
                  src="https://aquamarine-hornet-945619.hostingersite.com/wp-content/uploads/2025/11/10894EDC-4837-4CD0-B42D-9D381CD7425C-scaled.jpg"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full opacity-10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
