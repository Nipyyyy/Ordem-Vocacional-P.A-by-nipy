import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../assets/logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue/90 border-t border-light-purple/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 text-accent-gold">
                {logo}
              </div>
              <span className="text-xl font-cinzel font-bold text-accent-gold">
                Ordem Vocacional
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Descubra sua verdadeira vocação através do nosso teste vocacional único, 
              inspirado em nosso RPG.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contato@ordemvocacional.com" className="text-white hover:text-accent-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-accent-gold font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent-gold transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-accent-gold transition-colors">Sobre o Teste</Link></li>
              <li><Link to="/teste" className="text-gray-300 hover:text-accent-gold transition-colors">Fazer Teste</Link></li>
              <li><Link to="/rpg" className="text-gray-300 hover:text-accent-gold transition-colors">RPG</Link></li>
            </ul>
          </div>

          {/* RPG Section */}
          <div className="col-span-1">
            <h3 className="text-accent-gold font-medium mb-4">RPG</h3>
            <ul className="space-y-2">
              <li><Link to="/rpg#regras" className="text-gray-300 hover:text-accent-gold transition-colors">Regras</Link></li>
              <li><Link to="/rpg#cenarios" className="text-gray-300 hover:text-accent-gold transition-colors">Cenários</Link></li>
              <li><Link to="/rpg#personagens" className="text-gray-300 hover:text-accent-gold transition-colors">Personagens</Link></li>
              <li><Link to="/rpg#tokens" className="text-gray-300 hover:text-accent-gold transition-colors">Tokens</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-accent-gold font-medium mb-4">Contato</h3>
            <p className="text-gray-300 text-sm mb-2">
              Tem dúvidas ou sugestões? Entre em contato conosco.
            </p>
            <a 
              href="mailto:contato@ordemvocacional.com" 
              className="text-white hover:text-accent-gold transition-colors"
            >
              ordemvocacional@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-light-purple/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ordem Vocacional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;