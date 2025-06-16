import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Dice1 as DiceOne } from 'lucide-react';

const RPGInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('regras');
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-accent-gold mb-6">
              RPG Ordem Vocacional
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubra um universo único onde sua vocação se transforma em uma 
              jornada épica de autodescoberta e aventura.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-accent-gold rounded-full"></div>
            </div>
          </div>

          {/* Tabs de Navegação */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button 
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'regras' 
                  ? 'bg-accent-gold text-dark-blue font-medium' 
                  : 'bg-dark-blue/50 text-gray-300 hover:bg-dark-blue'
              }`}
              onClick={() => setActiveTab('regras')}
            >
              <Book size={18} className="mr-2" />
              Regras
            </button>
            <button 
              className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                activeTab === 'situacoes' 
                  ? 'bg-accent-gold text-dark-blue font-medium' 
                  : 'bg-dark-blue/50 text-gray-300 hover:bg-dark-blue'
              }`}
              onClick={() => setActiveTab('situacoes')}
            >
              <DiceOne size={18} className="mr-2" />
              Situações
            </button>
          </div>

          {/* Conteúdo da Tab Ativa */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'regras' && (
              <div className="card">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6">
                  Livro de Regras
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-cinzel font-semibold text-white mb-3">
                      Visão Geral
                    </h3>
                    <p className="text-gray-300 mb-4">
                      O RPG Ordem Vocacional é um jogo de interpretação de papéis baseado em 
                      narrativa, onde os jogadores exploram diferentes profissões e situações 
                      do dia a dia em um contexto imersivo e educativo.
                    </p>
                  </div>
                  
                  <div className="bg-dark-blue/70 p-4 rounded-lg border border-light-purple/30">
                    <h3 className="text-lg font-cinzel font-semibold text-accent-gold mb-2">
                      Acesse o Livro de Regras Completo
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Para acessar todas as regras, mecânicas e detalhes do sistema, consulte 
                      nosso livro de regras completo.
                    </p>
                    <a 
                      href="#" 
                      className="btn-primary inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Book size={18} className="mr-2" />
                      Acessar Livro de Regras
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'situacoes' && (
              <div className="card">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-6">
                  Situações por Profissão
                </h2>
                
                <div className="space-y-8">
                  {/* Médico */}
                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Médico
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Situação Fácil</h4>
                        <p className="text-gray-300">
                          Atendimento de rotina em consultório: paciente com sintomas 
                          comuns de gripe precisa de diagnóstico e tratamento.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Situação Média</h4>
                        <p className="text-gray-300">
                          Emergência no pronto-socorro: paciente com sintomas diversos 
                          necessita diagnóstico rápido e preciso.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Situação Difícil</h4>
                        <p className="text-gray-300">
                          Cirurgia complexa: procedimento delicado com complicações 
                          inesperadas durante a operação.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Professor */}
                  <div className="bg-dark-purple/30 p-6 rounded-lg border border-light-purple/20">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-4">
                      Professor
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Situação Fácil</h4>
                        <p className="text-gray-300">
                          Aula introdutória: apresentação de um novo tópico para uma 
                          turma engajada e participativa.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Situação Média</h4>
                        <p className="text-gray-300">
                          Aluno com dificuldade: identificar e adaptar o método de 
                          ensino para ajudar um estudante específico.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Situação Difícil</h4>
                        <p className="text-gray-300">
                          Turma desafiadora: gerenciar uma classe com diferentes níveis 
                          de aprendizado e problemas comportamentais.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-blue/70 p-4 rounded-lg border border-light-purple/30">
                    <p className="text-gray-300">
                      Estas são apenas algumas das situações disponíveis. Novas profissões 
                      e cenários são adicionados em breve para melhorar sua experiência 
                      no jogo.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RPGInfo;