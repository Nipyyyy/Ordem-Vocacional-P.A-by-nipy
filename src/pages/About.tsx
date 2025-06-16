import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Compass, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-accent-gold mb-6">
              Sobre a Ordem Vocacional
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Descubra como nosso teste único combina psicologia vocacional com
              elementos de RPG para revelar seu verdadeiro caminho profissional.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-accent-gold rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 bg-dark-blue/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-6">
                O Que é a Ordem Vocacional?
              </h2>
              <p className="text-gray-300 mb-4">
                A Ordem Vocacional é um teste vocacional inovador que utiliza
                elementos narrativos e visuais de RPG para tornar o caminho de
                autoconhecimento profissional melhor, imersivo e realistico.
              </p>
              <p className="text-gray-300 mb-4">
                Diferente dos testes vocacionais tradicionais, nossa abordagem
                envolve o participante descobrir sua profissão, onde cada
                resposta revela sua profissão, mas também características de
                personalidade representadas como pontos fortes da profissão.
              </p>
              <p className="text-gray-300">
                Nosso método faz que com após o teste o participante possa jogar
                e participar do RPG de forma que consiga ver como seria a sua
                profissão e como é atuar nela.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full bg-dark-purple/30 p-8 rounded-lg border border-light-purple/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <BookOpen size={24} className="text-accent-gold" />
                <h3 className="text-xl font-cinzel font-semibold text-accent-gold">
                  Nossa Missão
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Guiar pessoas em sua jornada de autodescoberta profissional,
                combinando o nosso RPG e Situações para descobrir mais sobre a
                sua profissão ideal.
              </p>

              <div className="flex items-center space-x-4 mb-6 mt-8">
                <Compass size={24} className="text-accent-gold" />
                <h3 className="text-xl font-cinzel font-semibold text-accent-gold">
                  Nossa Abordagem
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    size={18}
                    className="text-accent-gold mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Avaliação psicométrica fundamentada em pesquisa
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    size={18}
                    className="text-accent-gold mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Elementos de RPG como tokens, cenarios e cinemáticas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    size={18}
                    className="text-accent-gold mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Resultados personalizados com perguntas práticas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle
                    size={18}
                    className="text-accent-gold mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    Conexão entre o imaginario e a realidade
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-4">
              Como Funciona o Teste
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Nosso teste é estruturado como uma jornada de autodescoberta,
              combinando ciência e narrativa para revelar seu potencial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-dark-purple flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-accent-gold">1</span>
                  <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-accent-gold flex items-center justify-center">
                    <Star size={14} className="text-dark-purple" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-cinzel font-semibold text-accent-gold text-center mb-3">
                Cadastro e Login
              </h3>
              <p className="text-gray-300 text-center">
                Crie sua conta para iniciar sua jornada e acompanhar seus
                resultados ao longo do tempo.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-dark-purple flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-accent-gold">2</span>
                  <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-accent-gold flex items-center justify-center">
                    <Star size={14} className="text-dark-purple" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-cinzel font-semibold text-accent-gold text-center mb-3">
                Responda ao Questionário
              </h3>
              <p className="text-gray-300 text-center">
                Enfrente desafios e faça escolhas que revelarão suas aptidões e
                características de personalidade.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-dark-purple flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-accent-gold">3</span>
                  <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-accent-gold flex items-center justify-center">
                    <Star size={14} className="text-dark-purple" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-cinzel font-semibold text-accent-gold text-center mb-3">
                Receba seu Perfil
              </h3>
              <p className="text-gray-300 text-center">
                Descubra sua profissão, pontos principais e caminhos
                profissionais recomendados.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-dark-purple flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-accent-gold">4</span>
                  <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-accent-gold flex items-center justify-center">
                    <Star size={14} className="text-dark-purple" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-cinzel font-semibold text-accent-gold text-center mb-3">
                Explore Possibilidades
              </h3>
              <p className="text-gray-300 text-center">
                Aprofunde-se em seu perfil, com perguntas sobre carreiras,
                habilidades e oportunidades de desenvolvimento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-dark-purple to-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-6">
              Pronto Para Iniciar Sua Jornada?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubra sua vocação autêntica em uma experiência única que
              combina auto-reflexão, psicologia e RPG.
            </p>
            <Link to="/teste" className="btn-primary">
              Iniciar o Teste
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
