import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Download, Eye } from 'lucide-react';

interface Token {
  id: string;
  name: string;
  description: string;
  imagePath: string;
}

interface ProfessionCategory {
  id: string;
  name: string;
  description: string;
  tokens: Token[];
}

const TokensAndMaps: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const professionCategories: ProfessionCategory[] = [
    {
      id: 'medicina',
      name: 'Medicina',
      description: 'Tokens relacionados à área médica e de saúde',
      tokens: [
        {
          id: 'medico-1',
          name: 'Médico Clínico',
          description: 'Médico com tablet realizando consulta',
          imagePath: '/src/assets/Medico Folha.png'
        },
        {
          id: 'medico-2',
          name: 'Médico Emergencista',
          description: 'Médico com máscara e prancheta em situação de emergência',
          imagePath: '/src/assets/Medica Prancha.png'
        },
        {
          id: 'medica-1',
          name: 'Médica com Seringa',
          description: 'Médica preparando aplicação de vacina ou medicamento',
          imagePath: '/src/assets/Medica Seringa.png'
        },
        {
          id: 'medica-2',
          name: 'Médica com Oxímetro',
          description: 'Médica utilizando oxímetro para verificar saturação',
          imagePath: '/src/assets/Medica Pressão.png'
        }
      ]
    },
    {
      id: 'tecnologia',
      name: 'Tecnologia da Informação',
      description: 'Tokens relacionados à área de TI e desenvolvimento',
      tokens: [
        // Tokens serão adicionados quando você fornecer as imagens
      ]
    },
    {
      id: 'educacao',
      name: 'Educação',
      description: 'Tokens relacionados ao ensino e pedagogia',
      tokens: [
        // Tokens serão adicionados quando você fornecer as imagens
      ]
    },
    {
      id: 'direito',
      name: 'Direito',
      description: 'Tokens relacionados à área jurídica',
      tokens: [
        // Tokens serão adicionados quando você fornecer as imagens
      ]
    },
    {
      id: 'artes',
      name: 'Artes e Design',
      description: 'Tokens relacionados à criação artística e design',
      tokens: [
        // Tokens serão adicionados quando você fornecer as imagens
      ]
    },
    {
      id: 'administracao',
      name: 'Administração',
      description: 'Tokens relacionados à gestão e negócios',
      tokens: [
        // Tokens serão adicionados quando você fornecer as imagens
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const openTokenModal = (token: Token) => {
    setSelectedToken(token);
  };

  const closeTokenModal = () => {
    setSelectedToken(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-accent-gold mb-6">
              Tokens e Mapas RPG
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore nossa coleção de tokens de personagens organizados por profissão 
              e mapas de cenários para enriquecer suas sessões de RPG.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-accent-gold rounded-full"></div>
            </div>
          </div>

          {/* Seção de Tokens por Categoria */}
          <section className="mb-16">
            <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-8 text-center">
              Tokens por Profissão
            </h2>
            
            <div className="space-y-4">
              {professionCategories.map((category) => (
                <div key={category.id} className="card">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-2 hover:bg-dark-purple/20 rounded-md transition-colors"
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {category.description} • {category.tokens.length} tokens disponíveis
                      </p>
                    </div>
                    <div className="text-accent-gold">
                      {expandedCategory === category.id ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 border-t border-light-purple/20 pt-6"
                      >
                        {category.tokens.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {category.tokens.map((token) => (
                              <motion.div
                                key={token.id}
                                className="bg-dark-purple/30 rounded-lg p-4 border border-light-purple/20 hover:border-accent-gold/50 transition-all duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => openTokenModal(token)}
                              >
                                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-dark-blue/50">
                                  <img 
                                    src={token.imagePath} 
                                    alt={token.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <h4 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                                  {token.name}
                                </h4>
                                <p className="text-gray-300 text-sm mb-4">
                                  {token.description}
                                </p>
                                <div className="flex space-x-2">
                                  <button className="flex-1 bg-accent-gold/20 hover:bg-accent-gold/30 text-accent-gold text-xs py-2 px-3 rounded-md transition-colors flex items-center justify-center">
                                    <Eye size={14} className="mr-1" />
                                    Ver
                                  </button>
                                  <button className="flex-1 bg-dark-blue/50 hover:bg-dark-blue text-white text-xs py-2 px-3 rounded-md transition-colors flex items-center justify-center">
                                    <Download size={14} className="mr-1" />
                                    Baixar
                                  </button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <p className="text-gray-400 mb-4">
                              Tokens para esta categoria serão adicionados em breve.
                            </p>
                            <div className="w-16 h-16 mx-auto bg-dark-purple/50 rounded-lg flex items-center justify-center">
                              <span className="text-2xl">👀</span>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Seção de Mapas */}
          <section>
            <h2 className="text-3xl font-cinzel font-bold text-accent-gold mb-8 text-center">
              Mapas de Cenários
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-dark-purple/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏥</div>
                    <p className="text-accent-gold">Hospital</p>
                  </div>
                </div>
                <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-2">
                  Hospital Central
                </h3>
                <p className="text-gray-300 mb-4">
                  Mapa detalhado de um hospital com salas de emergência, consultórios e centro cirúrgico.
                </p>
                <button className="btn-primary w-full">
                  Em Breve
                </button>
              </div>

              <div className="card">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-dark-purple/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <p className="text-accent-gold">Escritório</p>
                  </div>
                </div>
                <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-2">
                  Empresa Publica
                </h3>
                <p className="text-gray-300 mb-4">
                  Ambiente corporativo com salas de reunião, escritórios e áreas comuns.
                </p>
                <button className="btn-primary w-full">
                  Em Breve
                </button>
              </div>

              <div className="card">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-dark-purple/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏫</div>
                    <p className="text-accent-gold">Escola</p>
                  </div>
                </div>
                <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-2">
                  Escola Publica
                </h3>
                <p className="text-gray-300 mb-4">
                  Ambiente escolar completo com salas de aula, laboratórios e biblioteca.
                </p>
                <button className="btn-primary w-full">
                  Em Breve
                </button>
              </div>

              <div className="card">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-dark-purple/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">⚖️</div>
                    <p className="text-accent-gold">Tribunal</p>
                  </div>
                </div>
                <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-2">
                  Fórum de Justiça
                </h3>
                <p className="text-gray-300 mb-4">
                  Tribunal completo com salas de audiência, gabinetes e cartórios.
                </p>
                <button className="btn-primary w-full">
                  Em Breve
                </button>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Modal de Token */}
      <AnimatePresence>
        {selectedToken && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeTokenModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-blue border border-light-purple/20 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-cinzel font-bold text-accent-gold mb-2">
                    {selectedToken.name}
                  </h3>
                  <p className="text-gray-300">
                    {selectedToken.description}
                  </p>
                </div>
                <button
                  onClick={closeTokenModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <img 
                  src={selectedToken.imagePath} 
                  alt={selectedToken.name}
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>

              <div className="flex space-x-4">
                <button className="btn-primary flex-1 flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Baixar Token
                </button>
                <button 
                  onClick={closeTokenModal}
                  className="btn-secondary flex-1"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TokensAndMaps;