import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-dark-purple/60 flex items-center justify-center">
              <AlertTriangle size={48} className="text-accent-gold" />
            </div>
          </div>
          
          <h1 className="text-4xl font-cinzel font-bold text-accent-gold mb-4">
            Página Não Encontrada
          </h1>
          
          <p className="text-gray-300 mb-8">
            Parece que você se aventurou além dos limites conhecidos de Vocatio. 
            Esta página não existe em nosso mapa.
          </p>
          
          <Link to="/" className="btn-primary flex items-center justify-center mx-auto w-max">
            <Home size={18} className="mr-2" />
            Voltar para o Início
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;