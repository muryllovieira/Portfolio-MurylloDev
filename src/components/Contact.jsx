import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o canal que for mais conveniente para você.
          </p>
        </motion.div>

        <div className="gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  info: '+55 (11) 93328-5377',
                  description: 'Resposta rápida e direta',
                  action: () =>
                    window.open('https://wa.me/5511933285377', '_blank'),
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  info: 'muryllovieira59@gmail.com',
                  description: 'Para contato detalhado',
                  action: () =>
                    window.open('mailto:muryllovieira59@gmail.com', '_blank'),
                },
                {
                  icon: MapPin,
                  title: 'Localização',
                  info: 'Barueri, SP',
                  description: 'Localização de contato',
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start justify-center space-x-4 p-4 rounded-lg transition-all duration-300 min-w-[230px] max-w-[320px] ${
                    contact.action ? 'hover:bg-emerald-50 cursor-pointer' : ''
                  }`}
                  onClick={contact.action}
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {contact.title}
                    </h4>
                    <p className="text-emerald-600 font-medium">
                      {contact.info}
                    </p>
                    <p className="text-sm text-gray-500">
                      {contact.description}
                    </p>
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

export default Contact;
