import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  testQuestions,
  TestQuestion,
  TestOption,
  VocationalProfile,
} from '../data/testQuestions';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';

const Test: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [profilePoints, setProfilePoints] = useState<Record<string, number>>({
    sábio: 0,
    explorador: 0,
    artífice: 0,
    guardião: 0,
    diplomata: 0,
    estrategista: 0,
  });
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAnswer = (
    questionId: number,
    optionId: string,
    points: Record<string, number>
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));

    // Atualiza os pontos do perfil
    setProfilePoints((prev) => {
      const newPoints = { ...prev };

      // Adiciona os pontos da resposta atual
      Object.keys(points).forEach((profile) => {
        newPoints[profile] = (newPoints[profile] || 0) + points[profile];
      });

      return newPoints;
    });

    // Avança para a próxima pergunta após um breve delay
    setTimeout(() => {
      if (currentQuestion < testQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Se for a última pergunta, calcula o resultado
        handleSubmitTest();
      }
    }, 500);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    setIsSubmitting(true);

    // Identifica o perfil dominante
    let dominantProfile: VocationalProfile = 'estrategista';
    let maxPoints = 0;

    Object.entries(profilePoints).forEach(([profile, points]) => {
      if (points > maxPoints) {
        maxPoints = points;
        dominantProfile = profile as VocationalProfile;
      }
    });

    // Salva o resultado no localStorage
    localStorage.setItem(
      'testResult',
      JSON.stringify({
        dominantProfile,
        profilePoints,
        completedAt: new Date().toISOString(),
      })
    );

    // Redireciona para a página de resultados após um breve delay
    setTimeout(() => {
      navigate('/resultados');
    }, 1000);
  };

  const progressPercentage =
    ((currentQuestion + 1) / testQuestions.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Cabeçalho do teste */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-accent-gold mb-4">
              Teste Vocacional
            </h1>
            <p className="text-gray-300 mb-6">
              Responda honestamente para descobrir sua verdadeira vocação
            </p>

            {/* Barra de progresso */}
            <div className="relative w-full h-2 bg-dark-blue rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-accent-gold"
                initial={{
                  width: `${(currentQuestion / testQuestions.length) * 100}%`,
                }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>
                Pergunta {currentQuestion + 1} de {testQuestions.length}
              </span>
              <span>{Math.round(progressPercentage)}% concluído</span>
            </div>
          </div>

          {/* Pergunta atual */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="card relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-accent-gold transition-colors"
              onClick={() => setShowTooltip(!showTooltip)}
              aria-label="Ajuda"
            >
              <HelpCircle size={20} />
            </button>

            {showTooltip && (
              <div className="absolute top-12 right-4 w-64 p-3 bg-dark-purple/90 border border-light-purple/30 rounded-md shadow-lg z-10 text-sm text-gray-300">
                Escolha a opção que melhor reflete sua personalidade e
                preferências. Não há respostas certas ou erradas, apenas
                diferentes caminhos.
                <div className="absolute -top-2 right-4 w-4 h-4 bg-dark-purple/90 border-t border-l border-light-purple/30 transform rotate-45"></div>
              </div>
            )}

            <h2 className="text-xl font-medium text-white mb-6">
              {testQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {testQuestions[currentQuestion].options.map(
                (option: TestOption) => (
                  <button
                    key={option.id}
                    className={`w-full text-left p-4 rounded-md border transition-all duration-300 ${
                      answers[testQuestions[currentQuestion].id] === option.id
                        ? 'bg-accent-gold/20 border-accent-gold text-white'
                        : 'bg-dark-blue/50 border-light-purple/20 text-gray-300 hover:bg-dark-blue/70'
                    }`}
                    onClick={() =>
                      handleAnswer(
                        testQuestions[currentQuestion].id,
                        option.id,
                        option.points
                      )
                    }
                  >
                    {option.text}
                  </button>
                )
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className={`flex items-center text-gray-300 hover:text-accent-gold transition-colors ${
                  currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ArrowLeft size={18} className="mr-1" />
                Anterior
              </button>

              {currentQuestion < testQuestions.length - 1 ? (
                <div className="text-gray-400 text-sm italic">
                  Selecione uma opção para continuar
                </div>
              ) : (
                <button
                  onClick={handleSubmitTest}
                  disabled={
                    !answers[testQuestions[currentQuestion].id] || isSubmitting
                  }
                  className={`flex items-center btn-primary ${
                    !answers[testQuestions[currentQuestion].id] || isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-dark-blue border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <>
                      Finalizar Teste
                      <ArrowRight size={18} className="ml-1" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Test;
