import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    'const Muryllo = (name, technologies) => {',
    'Hello World, my name is...',
  ];

  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      const fullText = typingTexts[textIndex];
      setCurrentText(fullText.substring(0, charIndex + 1));
      if (charIndex < fullText.length) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }, 2000);
      }
    }, 80);

    return () => clearTimeout(interval);
  }, [charIndex, textIndex]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden gradient-background"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <span>Desenvolvedor Front-End & Mobile</span>
            </motion.div>

            <div className="space-y-6">
              <p className="font-mono text-emerald-600 text-base md:text-lg">
                <span className="blinking-cursor">{currentText}</span>
              </p>
            </div>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="./src/pdf/CV - MURYLLO VIEIRA.pdf"
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative ">
              <div className="relative z-10 rounded-xl overflow-hidden">
                <img
                  alt="Mockup de foto de Muryllo Vieira desenvolvedor front-end e mobile"
                  className="w-full max-w-2xl mx-auto img-me"
                  src="https://muryllovieira.com.br/muryllo.png"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-white/30 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
