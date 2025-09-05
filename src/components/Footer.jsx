import React from 'react';
import { motion } from 'framer-motion';
import logo from '@/images/logofooter.png';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Linkedin, 
  Youtube,
  Shield,
  Zap,
  Award,
  Github
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Processo', href: '#processo' },
    { label: 'Valores', href: '#valores' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    'Sites Institucionais',
    'Lojas Virtuais',
    'Landing Pages',
    'Otimização SEO',
    'Consultoria WordPress'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/muryllodev/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muryllo-vieira-a2b79024a/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/muryllovieira', label: 'Github' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="tech-pattern w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.img
                src={logo}
                alt="Muryllo Dev Logo"
                className="h-12 "
                whileHover={{ scale: 1.05 }}
              />
              <p className="text-gray-400mt-3 text-sm leading-relaxed">
                Especialista em WordPress e WooCommerce. 
                Transformo ideias em sites que realmente convertem e geram resultados.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">+55 (11) 93328-5377</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">muryllovieira59@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Barueri, SP - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Seg - Sex: 9h às 18h</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
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

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">Links Rápidos</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-semibold text-white mb-6 block">Serviços</span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Badges & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <span className="text-lg font-semibold text-white mb-6 block">Certificações</span>
            
            <div className="space-y-4">
              {[
                { icon: Shield, text: 'Segurança WordPress' },
                { icon: Zap, text: 'Performance Expert' },
                { icon: Award, text: 'SEO Certified' }
              ].map((badge) => (
                <div key={badge.text} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-800 rounded-lg p-4">
              <span className="text-sm font-medium text-white block mb-2">Garantias</span>
              <div className="space-y-2 text-xs text-gray-400">
                <p>✓ Entrega no prazo acordado</p>
                <p>✓ Suporte pós-lançamento</p>
                <p>✓ Satisfação garantida</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Muryllo Dev. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                | Desenvolvido por Muryllo Vieira em São Paulo
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;