import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stars-pattern bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/70 to-dark-purple/90"></div>
        
        <div className="container mx-auto px-4 z-10 mt-16">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-6">
              Descubra Sua <span className="text-accent-gold">Verdadeira Vocação</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Um teste vocacional único que revela sua carreira profissional 
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/teste" className="btn-primary">
                Iniciar Teste
              </Link>
              <Link to="/sobre" className="btn-secondary">
                Saiba Mais
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Arrow Down */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowRight size={30} className="text-accent-gold transform rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-blue/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Como Funciona</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Nosso teste é uma forma de além de descobrir sua profissão
              Saber se você aguenta este caminho
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 rounded-full bg-dark-purple flex items-center justify-center mb-6">
                <BookOpen size={24} className="text-accent-gold" />
              </div>
              <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-3">
                Teste Personalizado
              </h3>
              <p className="text-gray-300">
                Responda perguntas cuidadosamente elaboradas que analisam 
                suas habilidades, interesses e características de personalidade.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 rounded-full bg-dark-purple flex items-center justify-center mb-6">
                <Sparkles size={24} className="text-accent-gold" />
              </div>
              <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-3">
                Análise Profunda
              </h3>
              <p className="text-gray-300">
                Nosso teste avalia suas respostas e identifica caracteriticas 
                que revelam suas verdadeiras vocações e caminhos profissionais.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-14 w-14 rounded-full bg-dark-purple flex items-center justify-center mb-6">
                <Users size={24} className="text-accent-gold" />
              </div>
              <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-3">
                Conexão com RPG
              </h3>
              <p className="text-gray-300">
                Descubra sua profissão, habilidades e conhecimentos 
                que vai estar conectado com seu personagem do RPG
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-br from-dark-purple to-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-title">Pronto Para Descobrir Sua Vocação?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Dê o primeiro passo do seu caminho de autoconhecimento e descubra 
              qual é o seu verdadeiro propósito profissional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/teste" className="btn-primary">
                Fazer o Teste Agora
              </Link>
              <Link to="/login" className="btn-secondary">
                Entrar em sua Conta
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;