import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: '',
    budget: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.consent) {
    toast({
      title: "Consentimento necessário",
      description: "Por favor, aceite os termos de privacidade para continuar.",
      variant: "destructive",
      duration: 5000,
    });
    return;
  }
 
  // Dados que serão enviados
  const templateParams = {
    name: formData.name,
    email: formData.email,
    whatsapp: formData.whatsapp,
    projectType: formData.projectType,
    budget: formData.budget,
    message: formData.message,
  };

  emailjs.send(
    'service_o5lmdp7',
    'template_0xy9fx5',
    templateParams,
    'hLvZ3TNN_bqpoKhlo'
  ).then((response) => {
    toast({
      title: "Solicitação enviada!",
      description: "Seu contato foi enviado com sucesso. Retorno em até 2 horas.",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      projectType: '',
      budget: '',
      message: '',
      consent: false
    });
  }).catch((err) => {
    toast({
      title: "Erro ao enviar",
      description: "Tente novamente mais tarde ou pelos canais de contato direto.",
      variant: "destructive",
      duration: 5000,
    });
  });
};


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
            Vamos Conversar sobre seu <span className="gradient-text">Projeto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conte-me sobre sua ideia e vamos transformá-la em um site que realmente converte. 
            Respondo em até 2 horas e o orçamento é totalmente gratuito.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-600 mb-8">
                Prefere falar diretamente? Escolha o canal que for mais conveniente para você.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  info: '+55 (11) 93328-5377',
                  description: 'Resposta rápida e direta',
                  action: () => window.open('https://wa.me/5511933285377', '_blank')
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  info: 'muryllovieira59@gmail.com',
                  description: 'Para briefings detalhados',
                  action: () => window.open('mailto:muryllovieira59@gmail.com', '_blank')
                },
                {
                  icon: MapPin,
                  title: 'Localização',
                  info: 'Barueri, SP',
                  description: 'Atendimento online nacional'
                },
                {
                  icon: Clock,
                  title: 'Horário',
                  info: 'Seg - Sex: 9h às 18h',
                  description: 'Resposta em até 2 horas'
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    contact.action ? 'hover:bg-emerald-50 cursor-pointer' : ''
                  }`}
                  onClick={contact.action}
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                    <p className="text-emerald-600 font-medium">{contact.info}</p>
                    <p className="text-sm text-gray-500">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white"
            >
              <h4 className="font-bold mb-2">Quer falar agora?</h4>
              <p className="text-emerald-100 text-sm mb-4">
                Clique no botão abaixo e vamos conversar pelo WhatsApp!
              </p>
              <Button
                onClick={() => window.open('https://wa.me/5511933285377', '_blank')}
                className="w-full bg-white text-emerald-600 hover:bg-emerald-50"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Abrir WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solicitar Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <Input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Projeto *
                    </label>
                    <Select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="institucional">Site Institucional</option>
                      <option value="ecommerce">Loja Virtual</option>
                      <option value="landing">Landing Page</option>
                      <option value="otimizacao">Otimização/SEO</option>
                      <option value="manutencao">Manutenção</option>
                      <option value="outro">Outro</option>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Orçamento Aproximado
                  </label>
                  <Select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="ate-2k">Até R$ 850</option>
                    <option value="2k-5k">Até R$ 1.100</option>
                    <option value="5k-10k">Até R$ 1.600</option>
                    <option value="conversar">Prefiro conversar</option>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conte-me sobre seu projeto *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto, objetivos, prazo desejado e qualquer informação relevante..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, consent: checked }))
                    }
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                    Concordo com o tratamento dos meus dados pessoais conforme a{' '}
                      Política de Privacidade
                    e autorizo o contato para apresentação de proposta comercial. *
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary text-white py-3 text-lg"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Solicitação
                </Button>
              </form>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-700">
                  <strong>Próximos passos:</strong> Após enviar, você receberá uma resposta em até 2 horas 
                  com uma proposta personalizada e agendaremos uma conversa para alinhar todos os detalhes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;