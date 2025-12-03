import logo from '@/images/logofooter.png';
import { motion } from 'framer-motion';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Technical', href: '#technical' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/muryllodev/',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muryllo-vieira-a2b79024a/',
      label: 'LinkedIn',
    },
    { icon: Github, href: 'https://github.com/muryllovieira', label: 'Github' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden lg:flex lg:items-center justify-center lg:flex-row flex-col py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="tech-pattern w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-8 lg:space-y-0 items-center lg:items-start">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:w-1/3 flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="Muryllo Dev Logo"
              className="h-12"
              whileHover={{ scale: 1.05 }}
            />

            {/* Contact Info */}
            <div className="space-y-3 text-center">
              <div className="flex items-center space-x-3 justify-center">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">muryllovieira59@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+55 (11) 93328-5377</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+55 (11) 93328-5377</span>
              </div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:w-1/3 flex flex-col items-center"
          >
            <span className="text-lg font-semibold text-white mb-6 block text-center">
              Endereço
            </span>
            <div className="space-y-3 text-center">
              <div className="flex items-center space-x-3 justify-center">
                <span className="text-gray-300">Cidade: Barueri</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <span className="text-gray-300">Estado: São Paulo</span>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <span className="text-gray-300">País: Brasil</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6 lg:w-1/3 flex flex-col items-center"
          >
            <span className="text-lg font-semibold text-white mb-6 block text-center">
              Social
            </span>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 mt-8">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Muryllo Dev. Todos os direitos reservados. |
                Desenvolvido por Muryllo Vieira em São Paulo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
