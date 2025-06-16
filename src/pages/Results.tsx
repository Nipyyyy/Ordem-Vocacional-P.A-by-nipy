import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { vocationalProfiles, VocationalProfile } from '../data/testQuestions';
import { User, Clock, Award, BookOpen, Star, ChevronDown, ChevronUp, Share2 } from 'lucide-react';

interface TestResult {
  dominantProfile: VocationalProfile;
  secondaryProfile?: VocationalProfile;
  profilePoints: Record<string, number>;
  completedAt: string;
  isScattered?: boolean;
}

const Results: React.FC = () => {
  const [result, setResult] = useState<TestResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedSection, setExpandedSection] = useState<string | null>('careers');
  const navigate = useNavigate();

  useEffect(() => {
    // Recupera o resultado do teste do localStorage
    const storedResult = localStorage.getItem('testResult');
    
    if (storedResult) {
      const parsedResult = JSON.parse(storedResult);
      
      // Verifica se as respostas estão muito dispersas
      const points = Object.values(parsedResult.profilePoints);
      const maxPoints = Math.max(...points);
      const avgPoints = points.reduce((a, b) => a + b, 0) / points.length;
      const threshold = maxPoints * 0.7; // 70% do máximo
      
      // Se a média estiver próxima do máximo, as respostas estão dispersas
      if (avgPoints > threshold) {
        // Encontra os dois perfis com maior pontuação
        const sortedProfiles = Object.entries(parsedResult.profilePoints)
          .sort(([,a], [,b]) => b - a);
        
        parsedResult.dominantProfile = sortedProfiles[0][0] as VocationalProfile;
        parsedResult.secondaryProfile = sortedProfiles[1][0] as VocationalProfile;
        parsedResult.isScattered = true;
      }
      
      setResult(parsedResult);
    } else {
      navigate('/teste');
    }
    
    setLoading(false);
  }, [navigate]);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-cinzel font-bold text-accent-gold mb-4">
            Nenhum resultado encontrado
          </h1>
          <p className="text-gray-300 mb-8">
            Parece que você ainda não completou o teste vocacional.
          </p>
          <Link to="/teste" className="btn-primary">
            Fazer o Teste Agora
          </Link>
        </div>
      </div>
    );
  }

  const mainProfile = vocationalProfiles[result.dominantProfile];
  const secondaryProfile = result.secondaryProfile ? vocationalProfiles[result.secondaryProfile] : null;
  const completedDate = new Date(result.completedAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Cabeçalho do resultado */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-cinzel font-bold text-accent-gold mb-4">
              {result.isScattered ? 'Suas Áreas de Interesse' : 'Sua Área Principal'}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>Seu perfil vocacional</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>Concluído em {completedDate}</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-accent-gold rounded-full"></div>
            </div>
          </div>

          {/* Perfil Principal */}
          <div className="card mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="rounded-lg overflow-hidden h-64 mb-4">
                  <img 
                    src={mainProfile.imageUrl} 
                    alt={mainProfile.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-accent-gold">
                    <Award size={18} className="mr-2" />
                    <h3 className="font-cinzel font-semibold">
                      {result.isScattered ? 'Primeira Área de Interesse' : 'Área Principal'}
                    </h3>
                  </div>
                  <p className="text-white text-xl font-cinzel">{mainProfile.title}</p>
                </div>
                
                {secondaryProfile && result.isScattered && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-accent-gold">
                      <Star size={18} className="mr-2" />
                      <h3 className="font-cinzel font-semibold">Segunda Área de Interesse</h3>
                    </div>
                    <p className="text-white">{secondaryProfile.title}</p>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-cinzel font-bold text-accent-gold mb-4">
                  Sobre seu Perfil
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {mainProfile.description}
                </p>
                
                {result.isScattered && secondaryProfile && (
                  <div className="mb-6">
                    <h3 className="text-xl font-cinzel font-semibold text-accent-gold mb-3">
                      Área Complementar
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {secondaryProfile.description}
                    </p>
                  </div>
                )}
                
                <div className="flex space-x-4 justify-end">
                  <button className="btn-secondary flex items-center">
                    <Share2 size={16} className="mr-2" />
                    Compartilhar
                  </button>
                  <Link to="/teste" className="btn-primary flex items-center">
                    <BookOpen size={16} className="mr-2" />
                    Refazer Teste
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Detalhes do Perfil */}
          <div className="space-y-4">
            {/* Carreiras */}
            <div className="card">
              <button 
                className="w-full flex items-center justify-between text-xl font-cinzel font-semibold text-accent-gold mb-4"
                onClick={() => toggleSection('careers')}
              >
                <span>Carreiras Recomendadas</span>
                {expandedSection === 'careers' ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              
              {expandedSection === 'careers' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mb-4">
                    Com base no seu perfil vocacional, estas são algumas carreiras que 
                    podem ser particularmente adequadas para você:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mainProfile.careers.map((career, index) => (
                      <div 
                        key={index}
                        className="bg-dark-purple/30 p-3 rounded-md border border-light-purple/20"
                      >
                        <div className="flex items-center">
                          <Star size={16} className="text-accent-gold mr-2 flex-shrink-0" />
                          <span className="text-white">{career}</span>
                        </div>
                      </div>
                    ))}
                    
                    {result.isScattered && secondaryProfile && (
                      <>
                        <div className="sm:col-span-2 mt-4 mb-2">
                          <h4 className="text-lg font-cinzel font-semibold text-accent-gold">
                            Carreiras da Área Complementar
                          </h4>
                        </div>
                        {secondaryProfile.careers.map((career, index) => (
                          <div 
                            key={`secondary-${index}`}
                            className="bg-dark-purple/30 p-3 rounded-md border border-light-purple/20"
                          >
                            <div className="flex items-center">
                              <Star size={16} className="text-accent-gold mr-2 flex-shrink-0" />
                              <span className="text-white">{career}</span>
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Pontos Fortes */}
            <div className="card">
              <button 
                className="w-full flex items-center justify-between text-xl font-cinzel font-semibold text-accent-gold mb-4"
                onClick={() => toggleSection('strengths')}
              >
                <span>Seus Pontos Fortes</span>
                {expandedSection === 'strengths' ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              
              {expandedSection === 'strengths' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mb-4">
                    Estas são as habilidades e características que naturalmente 
                    se destacam em seu perfil vocacional:
                  </p>
                  <ul className="space-y-2">
                    {mainProfile.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <Star size={16} className="text-accent-gold mr-2 mt-1 flex-shrink-0" />
                        <span className="text-white">{strength}</span>
                      </li>
                    ))}
                    
                    {result.isScattered && secondaryProfile && (
                      <>
                        <li className="pt-4 pb-2">
                          <h4 className="text-lg font-cinzel font-semibold text-accent-gold">
                            Pontos Fortes Complementares
                          </h4>
                        </li>
                        {secondaryProfile.strengths.map((strength, index) => (
                          <li key={`secondary-${index}`} className="flex items-start">
                            <Star size={16} className="text-accent-gold mr-2 mt-1 flex-shrink-0" />
                            <span className="text-white">{strength}</span>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Desafios */}
            <div className="card">
              <button 
                className="w-full flex items-center justify-between text-xl font-cinzel font-semibold text-accent-gold mb-4"
                onClick={() => toggleSection('challenges')}
              >
                <span>Seus Desafios</span>
                {expandedSection === 'challenges' ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              
              {expandedSection === 'challenges' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mb-4">
                    Estas são áreas que podem representar desafios para seu 
                    perfil vocacional e merecem atenção especial:
                  </p>
                  <ul className="space-y-2">
                    {mainProfile.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronDown size={16} className="text-error mr-2 mt-1 flex-shrink-0" />
                        <span className="text-white">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Habilidades a Desenvolver */}
            <div className="card">
              <button 
                className="w-full flex items-center justify-between text-xl font-cinzel font-semibold text-accent-gold mb-4"
                onClick={() => toggleSection('skills')}
              >
                <span>Habilidades a Desenvolver</span>
                {expandedSection === 'skills' ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
              
              {expandedSection === 'skills' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 mb-4">
                    Estas são as habilidades que, se desenvolvidas, podem potencializar 
                    ainda mais seu perfil vocacional:
                  </p>
                  <ul className="space-y-2">
                    {mainProfile.skillsToImprove.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronUp size={16} className="text-success mr-2 mt-1 flex-shrink-0" />
                        <span className="text-white">{skill}</span>
                      </li>
                    ))}
                    
                    {result.isScattered && secondaryProfile && (
                      <>
                        <li className="pt-4 pb-2">
                          <h4 className="text-lg font-cinzel font-semibold text-accent-gold">
                            Habilidades Complementares
                          </h4>
                        </li>
                        {secondaryProfile.skillsToImprove.map((skill, index) => (
                          <li key={`secondary-${index}`} className="flex items-start">
                            <ChevronUp size={16} className="text-success mr-2 mt-1 flex-shrink-0" />
                            <span className="text-white">{skill}</span>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-cinzel font-bold text-white mb-6">
              Continue Sua Jornada
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/sobre" className="btn-primary">
                Saiba Mais
              </Link>
              <Link to="/teste" className="btn-secondary">
                Refazer o Teste
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;