// Arquivo com as perguntas do teste vocacional

export interface TestQuestion {
  id: number;
  question: string;
  options: TestOption[];
}

export interface TestOption {
  id: string;
  text: string;
  points: {
    [key: string]: number;
  };
}

// Áreas profissionais disponíveis
export type VocationalProfile = 
  | 'informatica'
  | 'medicina'
  | 'zoologia'
  | 'publicidade'
  | 'jornalismo'
  | 'artes'
  | 'administracao'
  | 'direito'
  | 'cinema'
  | 'professor'
  | 'assistente';

export const vocationalProfiles: Record<VocationalProfile, {
  title: string;
  description: string;
  careers: string[];
  strengths: string[];
  challenges: string[];
  skillsToImprove: string[];
  imageUrl: string;
}> = {
  'informatica': {
    title: 'Tecnologia da Informação',
    description: 'Você demonstra forte aptidão para a área de tecnologia, com excelente raciocínio lógico e interesse em solução de problemas através de recursos computacionais. Sua capacidade analítica e interesse por inovação são características marcantes.',
    careers: [
      'Desenvolvedor de Software',
      'Analista de Sistemas',
      'Engenheiro de Software',
      'Cientista de Dados',
      'Administrador de Redes',
      'Analista de Segurança',
      'Arquiteto de Software',
      'Especialista em Cloud Computing',
      'Analista de Business Intelligence',
      'Gestor de TI'
    ],
    strengths: [
      'Raciocínio lógico',
      'Resolução de problemas',
      'Pensamento sistemático',
      'Capacidade de aprendizado contínuo',
      'Adaptabilidade tecnológica'
    ],
    challenges: [
      'Manter-se atualizado com novas tecnologias',
      'Equilibrar aspectos técnicos e comunicação',
      'Gerenciar projetos complexos',
      'Trabalhar em equipe mantendo foco técnico'
    ],
    skillsToImprove: [
      'Comunicação interpessoal',
      'Gestão de tempo',
      'Habilidades de apresentação',
      'Visão de negócios'
    ],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'medicina': {
    title: 'Medicina',
    description: 'Você possui uma forte vocação para a área da saúde, combinando capacidade analítica com empatia e cuidado com as pessoas. Sua dedicação ao bem-estar humano e interesse por ciências biológicas são evidentes.',
    careers: [
      'Médico Clínico Geral',
      'Cirurgião',
      'Pediatra',
      'Cardiologista',
      'Neurologista',
      'Psiquiatra',
      'Dermatologista',
      'Médico do Trabalho',
      'Pesquisador Médico',
      'Médico de Família'
    ],
    strengths: [
      'Empatia',
      'Capacidade analítica',
      'Tomada de decisão',
      'Trabalho sob pressão',
      'Atenção aos detalhes'
    ],
    challenges: [
      'Equilibrar vida profissional e pessoal',
      'Lidar com situações de emergência',
      'Manter-se atualizado com avanços médicos',
      'Gestão emocional em casos críticos'
    ],
    skillsToImprove: [
      'Comunicação com pacientes',
      'Gestão de stress',
      'Liderança em equipe médica',
      'Habilidades administrativas'
    ],
    imageUrl: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'zoologia': {
    title: 'Zoologia',
    description: 'Sua paixão por animais e interesse em ciências naturais se destacam. Você demonstra forte aptidão para estudar e trabalhar com a vida animal, combinando conhecimento científico com dedicação à preservação das espécies.',
    careers: [
      'Zoólogo',
      'Pesquisador de Vida Selvagem',
      'Conservacionista',
      'Biólogo Marinho',
      'Veterinário de Zoo',
      'Comportamentalista Animal',
      'Consultor Ambiental',
      'Educador Ambiental',
      'Gestor de Reservas Naturais',
      'Pesquisador de Biodiversidade'
    ],
    strengths: [
      'Observação detalhada',
      'Pesquisa científica',
      'Paciência',
      'Trabalho em campo',
      'Consciência ambiental'
    ],
    challenges: [
      'Condições de trabalho variáveis',
      'Financiamento de pesquisas',
      'Conservação em face do desenvolvimento',
      'Documentação científica'
    ],
    skillsToImprove: [
      'Análise estatística',
      'Comunicação científica',
      'Gestão de projetos',
      'Tecnologia aplicada'
    ],
    imageUrl: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'publicidade': {
    title: 'Publicidade e Propaganda',
    description: 'Você demonstra forte criatividade e capacidade de comunicação estratégica. Sua habilidade em combinar pensamento criativo com objetivos de marketing é um diferencial importante nesta área.',
    careers: [
      'Diretor de Arte',
      'Redator Publicitário',
      'Planejador de Mídia',
      'Gestor de Marketing Digital',
      'Diretor Criativo',
      'Estrategista de Marca',
      'Social Media Manager',
      'Analista de Marketing',
      'Produtor de Conteúdo',
      'Consultor de Comunicação'
    ],
    strengths: [
      'Criatividade',
      'Comunicação estratégica',
      'Pensamento inovador',
      'Análise de mercado',
      'Adaptabilidade'
    ],
    challenges: [
      'Prazos apertados',
      'Demandas do cliente',
      'Mercado competitivo',
      'Tendências em constante mudança'
    ],
    skillsToImprove: [
      'Ferramentas digitais',
      'Análise de dados',
      'Gestão de projetos',
      'Negociação'
    ],
    imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'jornalismo': {
    title: 'Jornalismo',
    description: 'Sua capacidade de investigação e comunicação se destaca, junto com um forte senso de justiça social e interesse em contar histórias importantes. Você demonstra habilidade em analisar informações e transmiti-las de forma clara e objetiva.',
    careers: [
      'Repórter',
      'Editor',
      'Jornalista Digital',
      'Apresentador',
      'Correspondente Internacional',
      'Produtor de Conteúdo',
      'Assessor de Imprensa',
      'Jornalista Investigativo',
      'Editor de Vídeo',
      'Analista de Mídia'
    ],
    strengths: [
      'Comunicação clara',
      'Investigação',
      'Senso crítico',
      'Adaptabilidade',
      'Trabalho sob pressão'
    ],
    challenges: [
      'Prazos curtos',
      'Imparcialidade',
      'Verificação de fontes',
      'Mudanças na mídia'
    ],
    skillsToImprove: [
      'Mídias digitais',
      'Edição multimídia',
      'Análise de dados',
      'Storytelling'
    ],
    imageUrl: 'https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'artes': {
    title: 'Artes Visuais e Design',
    description: 'Sua criatividade e expressão artística são notáveis, combinadas com habilidade técnica e sensibilidade estética. Você demonstra capacidade de traduzir conceitos em elementos visuais impactantes.',
    careers: [
      'Designer Gráfico',
      'Ilustrador',
      'Artista Digital',
      'Designer de UX/UI',
      'Diretor de Arte',
      'Designer de Produto',
      'Artista Conceitual',
      'Designer Editorial',
      'Motion Designer',
      'Designer de Identidade Visual'
    ],
    strengths: [
      'Criatividade',
      'Sensibilidade estética',
      'Domínio técnico',
      'Pensamento visual',
      'Inovação'
    ],
    challenges: [
      'Demandas do cliente',
      'Prazos criativos',
      'Equilíbrio arte/comercial',
      'Tendências em mudança'
    ],
    skillsToImprove: [
      'Ferramentas digitais',
      'Gestão de projetos',
      'Comunicação com cliente',
      'Marketing pessoal'
    ],
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'administracao': {
    title: 'Administração',
    description: 'Você possui forte capacidade de gestão e visão estratégica. Sua habilidade em organizar recursos e liderar equipes, combinada com pensamento analítico, são características essenciais para o sucesso nesta área.',
    careers: [
      'Gestor de Projetos',
      'Administrador Financeiro',
      'Consultor Empresarial',
      'Gestor de Recursos Humanos',
      'Analista de Negócios',
      'Gestor de Operações',
      'Empreendedor',
      'Gestor de Marketing',
      'Analista de Processos',
      'Diretor Executivo'
    ],
    strengths: [
      'Liderança',
      'Organização',
      'Visão estratégica',
      'Tomada de decisão',
      'Gestão de recursos'
    ],
    challenges: [
      'Mercado competitivo',
      'Gestão de conflitos',
      'Mudanças econômicas',
      'Pressão por resultados'
    ],
    skillsToImprove: [
      'Tecnologia empresarial',
      'Línguas estrangeiras',
      'Inteligência emocional',
      'Inovação'
    ],
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'direito': {
    title: 'Direito',
    description: 'Você demonstra forte senso de justiça e capacidade analítica. Sua habilidade em interpretar informações complexas e argumentar de forma lógica são características fundamentais para a área jurídica.',
    careers: [
      'Advogado',
      'Juiz',
      'Promotor',
      'Defensor Público',
      'Procurador',
      'Consultor Jurídico',
      'Delegado',
      'Advogado Empresarial',
      'Mediador',
      'Especialista em Direito Digital'
    ],
    strengths: [
      'Análise crítica',
      'Argumentação',
      'Interpretação legal',
      'Ética profissional',
      'Comunicação formal'
    ],
    challenges: [
      'Atualização constante',
      'Pressão processual',
      'Complexidade legal',
      'Equilíbrio trabalho-vida'
    ],
    skillsToImprove: [
      'Tecnologia jurídica',
      'Oratória',
      'Gestão de tempo',
      'Networking'
    ],
    imageUrl: 'https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'cinema': {
    title: 'Cinema e Audiovisual',
    description: 'Sua criatividade narrativa e visão artística se destacam, junto com habilidade técnica em produção audiovisual. Você demonstra capacidade de contar histórias através de imagens e sons.',
    careers: [
      'Diretor',
      'Produtor',
      'Roteirista',
      'Editor de Vídeo',
      'Diretor de Fotografia',
      'Sound Designer',
      'Produtor Executivo',
      'Diretor de Arte',
      'Montador',
      'Documentarista'
    ],
    strengths: [
      'Criatividade visual',
      'Narrativa',
      'Direção artística',
      'Trabalho em equipe',
      'Visão estética'
    ],
    challenges: [
      'Financiamento',
      'Prazos de produção',
      'Gestão de equipe',
      'Mercado competitivo'
    ],
    skillsToImprove: [
      'Tecnologia audiovisual',
      'Gestão de projetos',
      'Marketing',
      'Networking'
    ],
    imageUrl: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'professor': {
    title: 'Educação',
    description: 'Você possui forte vocação para o ensino e desenvolvimento de pessoas. Sua capacidade de transmitir conhecimento e inspirar outros, combinada com paciência e empatia, são características essenciais.',
    careers: [
      'Professor',
      'Coordenador Pedagógico',
      'Orientador Educacional',
      'Pesquisador em Educação',
      'Designer Instrucional',
      'Gestor Escolar',
      'Professor de Educação Especial',
      'Consultor Educacional',
      'Educador Social',
      'Professor de Idiomas'
    ],
    strengths: [
      'Comunicação didática',
      'Empatia',
      'Organização',
      'Adaptabilidade',
      'Criatividade no ensino'
    ],
    challenges: [
      'Gestão de sala',
      'Diferentes aprendizados',
      'Recursos limitados',
      'Atualização pedagógica'
    ],
    skillsToImprove: [
      'Tecnologia educacional',
      'Gestão de conflitos',
      'Metodologias ativas',
      'Avaliação'
    ],
    imageUrl: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  'assistente': {
    title: 'Assistência Social',
    description: 'Você demonstra forte compromisso com o bem-estar social e capacidade de ajudar pessoas. Sua empatia e habilidade em lidar com situações sensíveis são características fundamentais.',
    careers: [
      'Assistente Social',
      'Conselheiro',
      'Coordenador de Projetos Sociais',
      'Analista de Políticas Públicas',
      'Gestor de ONGs',
      'Mediador Social',
      'Educador Social',
      'Especialista em Desenvolvimento Comunitário',
      'Consultor de Programas Sociais',
      'Coordenador de Voluntariado'
    ],
    strengths: [
      'Empatia',
      'Comunicação',
      'Resolução de conflitos',
      'Trabalho em equipe',
      'Sensibilidade social'
    ],
    challenges: [
      'Recursos limitados',
      'Situações emocionais',
      'Burocracia',
      'Demanda crescente'
    ],
    skillsToImprove: [
      'Gestão de projetos',
      'Políticas públicas',
      'Tecnologia social',
      'Captação de recursos'
    ],
    imageUrl: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
};

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Em um projeto em grupo, qual papel você geralmente assume?",
    options: [
      {
        id: "a",
        text: "Organizando e direcionando o grupo",
        points: { administracao: 3, direito: 2, professor: 2 }
      },
      {
        id: "b",
        text: "Buscando informações sendo fazer pesquisas, buscar noticiais etc",
        points: { informatica: 3, medicina: 2, zoologia: 2, professor: 1 }
      },
      {
        id: "c",
        text: "Dando ideias e sugestões ",
        points: { publicidade: 3, artes: 2, cinema: 2 }
      },
      {
        id: "d",
        text: "Tentar sempre se comunica tanto com o grupo quantto em apresentações",
        points: { direito: 3, administracao: 2, jornalismo: 2 }
      },
      {
        id: "e",
        text: "Colocando a mão na massa e fazendo realmente as ações",
        points: { informatica: 3, medicina: 2, assistente: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "O emprego ideal é aquele que?",
    options: [
      {
        id: "a",
        text: "Aprende muito",
        points: { medicina: 3, direito: 3, jornalismo: 2, professor: 2 }
      },
      {
        id: "b",
        text: "Contribui com a sociedade",
        points: { medicina: 3, direito: 2, assistente: 3, professor: 2 }
      },
      {
        id: "c",
        text: "Traz segurança",
        points: { administracao: 3, direito: 2, assistente: 2 }
      },
      {
        id: "d",
        text: "Surpreende ou emociona as pessoas",
        points: { publicidade: 3, artes: 3, cinema: 3 }
      },
      {
        id: "e",
        text: "Pode 'colocar a mão na massa'",
        points: { informatica: 3, zoologia: 3, administracao: 2 }
      },
      {
        id: "f",
        text: "Possui desafios",
        points: { informatica: 3, medicina: 2, direito: 2, jornalismo: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "Quais temas costumam chamar sua atenção em notícias e leituras?",
    options: [
      {
        id: "a",
        text: "Assuntos relacionados a novidades e avanços que transformam o cotidiano",
        points: { informatica: 3 }
      },
      {
        id: "b",
        text: "Conteúdos que falam sobre qualidade de vida e cuidados essenciais",
        points: { medicina: 3 }
      },
      {
        id: "c",
        text: "Informações que exploram diferentes formas de expressão e tradições",
        points: { artes: 3 }
      },
      {
        id: "d",
        text: "Temas que discutem o funcionamento das relações entre grupos e comunidades",
        points: { direito: 3 }
      },
      {
        id: "e",
        text: "Notícias sobre organização, finanças e dinâmicas de trabalho",
        points: { administracao: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "Qual tipo de atividade mais te energiza?",
    options: [
      {
        id: "a",
        text: "Gosto de lidar com situações que exigem soluções práticas e eficazes",
        points: { informatica: 3, medicina: 2, administracao: 2 }
      },
      {
        id: "b",
        text: "Sinto satisfação em estar presente para apoiar os outros, mesmo em pequenos detalhes",
        points: { assistente: 3, professor: 2, medicina: 2 }
      },
      {
        id: "c",
        text: "Me sinto vivo quando posso criar algo original, seja de forma visual, verbal ou outra",
        points: { artes: 3, cinema: 2, publicidade: 2, jornalismo: 2 }
      },
      {
        id: "d",
        text: "Curioso(a) por natureza, gosto de encontrar sentido e padrões em diferentes contextos",
        points: { direito: 3, jornalismo: 2, professor: 2, zoologia: 2 }
      },
      {
        id: "e",
        text: "Prefiro quando consigo organizar atividades ou recursos para que um objetivo seja atingido",
        points: { administracao: 3, direito: 2, informatica: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "Como você prefere aprender algo novo?",
    options: [
      {
        id: "a",
        text: "Através de experimentos práticos e tentativa e erro",
        points: { informatica: 3, medicina: 2, zoologia: 2 }
      },
      {
        id: "b",
        text: "Estudando teorias e conceitos em profundidade",
        points: { professor: 3, direito: 2, medicina: 2 }
      },
      {
        id: "c",
        text: "Interagindo e aprendendo com outras pessoas",
        points: { professor: 3, jornalismo: 2, administracao: 2 }
      },
      {
        id: "d",
        text: "Através de recursos visuais e criativos",
        points: { artes: 3, cinema: 2, publicidade: 2 }
      },
      {
        id: "e",
        text: "Analisando casos práticos e exemplos reais",
        points: { direito: 3, medicina: 2, administracao: 2 }
      }
    ]
  },
  {
    id: 6,
    question: "O que mais te motiva em um trabalho?",
    options: [
      {
        id: "a",
        text: "Estar envolvido(a) em processos que trazem algo novo e melhor para as situações",
        points: { informatica: 3, publicidade: 3, artes: 2, cinema: 2 }
      },
      {
        id: "b",
        text: "Sentir que o que faço tem um efeito positivo na vida das pessoas ao meu redor",
        points: { medicina: 3, zoologia: 2, professor: 3, assistente: 3 }
      },
      {
        id: "c",
        text: "Ter espaço para criar e experimentar ideias de forma livre e pessoal",
        points: { artes: 3, publicidade: 3, cinema: 3, jornalismo: 2 }
      },
      {
        id: "d",
        text: "Desafiar minha mente para entender situações complexas e encontrar soluções",
        points: { informatica: 3, direito: 3, jornalismo: 2 }
      },
      {
        id: "e",
        text: "Coordenar esforços e recursos para que metas sejam alcançadas com sucesso",
        points: { administracao: 3, assistente: 2, professor: 2 }
      }
    ]
  },
  {
    id: 7,
    question: "Quais temas costumam chamar sua atenção em notícias e leituras?",
    options: [
      {
        id: "a",
        text: "Assuntos relacionados a novidades e avanços que transformam o cotidiano",
        points: { informatica: 3, publicidade: 2, cinema: 2 }
      },
      {
        id: "b",
        text: "Conteúdos que falam sobre qualidade de vida e cuidados essenciais",
        points: { medicina: 3, assistente: 2, zoologia: 2 }
      },
      {
        id: "c",
        text: "Informações que exploram diferentes formas de expressão e tradições",
        points: { artes: 3, cinema: 2, jornalismo: 2 }
      },
      {
        id: "d",
        text: "Temas que discutem o funcionamento das relações entre grupos e comunidades",
        points: { professor: 3, direito: 2, jornalismo: 2, administracao: 2 }
      },
      {
        id: "e",
        text: "Notícias sobre organização, finanças e dinâmicas de trabalho",
        points: { administracao: 3, direito: 2, informatica: 2 }
      }
    ]
  },
  {
    id: 8,
    question: "Em um problema complexo, qual aspecto você prioriza?",
    options: [
      {
        id: "a",
        text: "Eficiência e praticidade da solução",
        points: { informatica: 3, administracao: 2 }
      },
      {
        id: "b",
        text: "Impacto nas pessoas envolvidas",
        points: { medicina: 3, direito: 2, assistente: 2 }
      },
      {
        id: "c",
        text: "Originalidade e inovação",
        points: { publicidade: 3, artes: 2, cinema: 2 }
      },
      {
        id: "d",
        text: "Aspectos legais e éticos",
        points: { direito: 3, jornalismo: 2, professor: 2 }
      },
      {
        id: "e",
        text: "Viabilidade e resultados",
        points: { administracao: 3, informatica: 2 }
      }
    ]
  },
  {
    id: 9,
    question: "Como você prefere contribuir para a sociedade?",
    options: [
      {
        id: "a",
        text: "Desenvolvendo soluções tecnológicas",
        points: { informatica: 3 }
      },
      {
        id: "b",
        text: "Cuidando e ajudando pessoas",
        points: { medicina: 3, assistente: 2, professor: 2 }
      },
      {
        id: "c",
        text: "Criando e inspirando através da arte",
        points: { artes: 3, cinema: 2, publicidade: 2 }
      },
      {
        id: "d",
        text: "Promovendo justiça e igualdade",
        points: { direito: 3, jornalismo: 2 }
      },
      {
        id: "e",
        text: "Gerando valor e desenvolvimento econômico",
        points: { administracao: 3, informatica: 2 }
      }
    ]
  },
  {
    id: 10,
    question: "Qual característica mais se destaca em você?",
    options: [
      {
        id: "a",
        text: " Gosto de encontrar soluções para problemas complexos, analisando os fatos de forma objetiva.",
        points: { informatica: 3, medicina: 2 }
      },
      {
        id: "b",
        text: "Costumo perceber facilmente o que os outros sentem e me preocupo em ajudar.",
        points: { medicina: 3, assistente: 2, professor: 2 }
      },
      {
        id: "c",
        text: "Tenho facilidade em pensar fora da caixa e me expresso bem por meio de ideias ou criações.",
        points: { artes: 3, cinema: 2, publicidade: 2 }
      },
      {
        id: "d",
        text: "Naturalmente assumo a frente em projetos, organizando pessoas e tarefas com clareza.",
        points: { administracao: 3, direito: 2, professor: 2 }
      },
      {
        id: "e",
        text: " Sinto uma vontade constante de aprender mais e entender a fundo aquilo que me intriga",
        points: { jornalismo: 3, zoologia: 2, professor: 2 }
      }
    ]
  }
];