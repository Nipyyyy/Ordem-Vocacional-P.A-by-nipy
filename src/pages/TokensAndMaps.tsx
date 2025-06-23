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
      id: 'informatica',
      name: 'Tecnologia da Informação',
      description: 'Tokens relacionados à área de TI e desenvolvimento',
      tokens: [
        {
          id: 'dev-1',
          name: 'Desenvolvedor Frontend',
          description: 'Desenvolvedor trabalhando com interfaces web',
          imagePath: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'dev-2',
          name: 'Analista de Sistemas',
          description: 'Profissional analisando arquitetura de sistemas',
          imagePath: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'dev-3',
          name: 'Administrador de Redes',
          description: 'Especialista em infraestrutura e redes',
          imagePath: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'dev-4',
          name: 'Cientista de Dados',
          description: 'Profissional analisando dados e estatísticas',
          imagePath: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'educacao',
      name: 'Educação',
      description: 'Tokens relacionados ao ensino e pedagogia',
      tokens: [
        {
          id: 'prof-1',
          name: 'Professora de Matematica',
          description: 'Professora do Senac tomando um café',
          imagePath: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'prof-2',
          name: 'Professor de Artes',
          description: 'Professor dando aula pratica',
          imagePath: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'prof-3',
          name: 'Professor 4',
          description: 'Professor fazendo tal coisa',
          imagePath: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'prof-4',
          name: 'Professor 5',
          description: 'Professor fazendo tal coisa',
          imagePath: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'direito',
      name: 'Direito',
      description: 'Tokens relacionados à área jurídica',
      tokens: [
        {
          id: 'adv-1',
          name: 'Advogado Criminalista',
          description: 'Advogado especializado em direito criminal',
          imagePath: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'adv-2',
          name: 'Juiz',
          description: 'Magistrado presidindo audiência',
          imagePath: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'adv-3',
          name: 'Promotor',
          description: 'Promotor de justiça em tribunal',
          imagePath: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'adv-4',
          name: 'Advogado Empresarial',
          description: 'Advogado especializado em direito empresarial',
          imagePath: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'artes',
      name: 'Artes Visuais e Design',
      description: 'Tokens relacionados à criação artística e design',
      tokens: [
        {
          id: 'art-1',
          name: 'Designer Gráfico',
          description: 'Designer criando identidade visual',
          imagePath: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'art-2',
          name: 'Ilustrador',
          description: 'Artista criando ilustrações digitais',
          imagePath: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'art-3',
          name: 'Designer UX/UI',
          description: 'Designer criando interfaces de usuário',
          imagePath: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'art-4',
          name: 'Diretor de Arte',
          description: 'Profissional dirigindo projetos visuais',
          imagePath: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'administracao',
      name: 'Administração',
      description: 'Tokens relacionados à gestão e negócios',
      tokens: [
        {
          id: 'adm-1',
          name: 'Gestor de Projetos',
          description: 'Profissional gerenciando equipes e projetos',
          imagePath: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'adm-2',
          name: 'Analista Financeiro',
          description: 'Profissional analisando dados financeiros',
          imagePath: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'adm-3',
          name: 'Gestor de RH',
          description: 'Profissional de recursos humanos',
          imagePath: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'adm-4',
          name: 'Empreendedor',
          description: 'Empresário desenvolvendo novos negócios',
          imagePath: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'jornalismo',
      name: 'Jornalismo',
      description: 'Tokens relacionados à comunicação e mídia',
      tokens: [
        {
          id: 'jorn-1',
          name: 'Repórter de Campo',
          description: 'Jornalista fazendo cobertura externa',
          imagePath: 'https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'jorn-2',
          name: 'Apresentador de TV',
          description: 'Jornalista apresentando telejornal',
          imagePath: 'https://images.pexels.com/photos/3944378/pexels-photo-3944378.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'jorn-3',
          name: 'Editor de Conteúdo',
          description: 'Profissional editando matérias jornalísticas',
          imagePath: 'https://images.pexels.com/photos/3944379/pexels-photo-3944379.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'jorn-4',
          name: 'Fotojornalista',
          description: 'Jornalista especializado em fotografia',
          imagePath: 'https://images.pexels.com/photos/3944380/pexels-photo-3944380.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'publicidade',
      name: 'Publicidade e Propaganda',
      description: 'Tokens relacionados à comunicação publicitária',
      tokens: [
        {
          id: 'pub-1',
          name: 'Redator Publicitário',
          description: 'Profissional criando textos publicitários',
          imagePath: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'pub-2',
          name: 'Diretor Criativo',
          description: 'Profissional dirigindo campanhas publicitárias',
          imagePath: 'https://images.pexels.com/photos/7688337/pexels-photo-7688337.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'pub-3',
          name: 'Social Media Manager',
          description: 'Especialista em redes sociais',
          imagePath: 'https://images.pexels.com/photos/7688338/pexels-photo-7688338.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'pub-4',
          name: 'Planejador de Mídia',
          description: 'Profissional planejando veiculação de campanhas',
          imagePath: 'https://images.pexels.com/photos/7688339/pexels-photo-7688339.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'cinema',
      name: 'Cinema e Audiovisual',
      description: 'Tokens relacionados à produção audiovisual',
      tokens: [
        {
          id: 'cin-1',
          name: 'Diretor de Cinema',
          description: 'Diretor comandando filmagem',
          imagePath: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'cin-2',
          name: 'Cinegrafista',
          description: 'Profissional operando câmera de cinema',
          imagePath: 'https://images.pexels.com/photos/2773499/pexels-photo-2773499.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'cin-3',
          name: 'Editor de Vídeo',
          description: 'Profissional editando material audiovisual',
          imagePath: 'https://images.pexels.com/photos/2773500/pexels-photo-2773500.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'cin-4',
          name: 'Produtor Audiovisual',
          description: 'Profissional produzindo conteúdo audiovisual',
          imagePath: 'https://images.pexels.com/photos/2773501/pexels-photo-2773501.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'zoologia',
      name: 'Zoologia',
      description: 'Tokens relacionados ao estudo e cuidado animal',
      tokens: [
        {
          id: 'zoo-1',
          name: 'Zoólogo de Campo',
          description: 'Pesquisador estudando animais na natureza',
          imagePath: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'zoo-2',
          name: 'Biólogo Marinho',
          description: 'Especialista em vida aquática',
          imagePath: 'https://images.pexels.com/photos/2317905/pexels-photo-2317905.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'zoo-3',
          name: 'Conservacionista',
          description: 'Profissional trabalhando na preservação animal',
          imagePath: 'https://images.pexels.com/photos/2317906/pexels-photo-2317906.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'zoo-4',
          name: 'Veterinário de Zoo',
          description: 'Veterinário cuidando de animais selvagens',
          imagePath: 'https://images.pexels.com/photos/2317907/pexels-photo-2317907.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'assistente',
      name: 'Assistência Social',
      description: 'Tokens relacionados ao trabalho social',
      tokens: [
        {
          id: 'ass-1',
          name: 'Assistente Social',
          description: 'Profissional atendendo famílias em vulnerabilidade',
          imagePath: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'ass-2',
          name: 'Conselheiro Tutelar',
          description: 'Profissional protegendo direitos de crianças',
          imagePath: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'ass-3',
          name: 'Educador Social',
          description: 'Profissional trabalhando com educação social',
          imagePath: 'https://images.pexels.com/photos/6646920/pexels-photo-6646920.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: 'ass-4',
          name: 'Gestor de ONG',
          description: 'Profissional gerenciando organização social',
          imagePath: 'https://images.pexels.com/photos/6646921/pexels-photo-6646921.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
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
