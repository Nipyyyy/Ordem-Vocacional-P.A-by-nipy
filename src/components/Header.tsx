import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, User, LogOut } from 'lucide-react';
import logo from '../assets/logo.tsx';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-blue/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="w-10 h-10 text-accent-gold">
              {logo}
            </div>
            <span className="text-xl font-cinzel font-bold tracking-wider text-accent-gold">
              Ordem Vocacional
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-accent-gold transition-colors ${location.pathname === '/' ? 'text-accent-gold' : 'text-white'}`}>Início</Link>
            <Link to="/sobre" className={`hover:text-accent-gold transition-colors ${location.pathname === '/sobre' ? 'text-accent-gold' : 'text-white'}`}>Sobre o Teste</Link>
            <Link to="/teste" className={`hover:text-accent-gold transition-colors ${location.pathname === '/teste' ? 'text-accent-gold' : 'text-white'}`}>Fazer Teste</Link>
            <Link to="/rpg" className={`hover:text-accent-gold transition-colors ${location.pathname === '/rpg' ? 'text-accent-gold' : 'text-white'}`}>RPG</Link>
            <Link to="/tokens-e-mapas" className={`hover:text-accent-gold transition-colors ${location.pathname === '/tokens-e-mapas' ? 'text-accent-gold' : 'text-white'}`}>Tokens e Mapas</Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-accent-gold">
                  <User size={18} />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-dark-blue border border-light-purple/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <button 
                    onClick={logout}
                    className="flex items-center w-full px-4 py-2 text-left hover:bg-dark-purple"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn-primary text-sm">Entrar</Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-dark-blue/95 backdrop-blur-md border-t border-light-purple/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className={`py-2 ${location.pathname === '/' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Início</Link>
            <Link to="/sobre" className={`py-2 ${location.pathname === '/sobre' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Sobre o Teste</Link>
            <Link to="/teste" className={`py-2 ${location.pathname === '/teste' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Fazer Teste</Link>
            <Link to="/rpg" className={`py-2 ${location.pathname === '/rpg' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>RPG</Link>
            <Link to="/tokens-e-mapas" className={`py-2 ${location.pathname === '/tokens-e-mapas' ? 'text-accent-gold' : 'text-white'}`} onClick={closeMenu}>Tokens e Mapas</Link>
            
            {isAuthenticated ? (
              <>
                <div className="border-t border-light-purple/20 pt-4 mt-4">
                  <div className="flex items-center space-x-2 text-white mb-4">
                    <User size={18} />
                    <span>{user?.name}</span>
                  </div>
                  <button 
                    onClick={() => { logout(); closeMenu(); }}
                    className="flex items-center text-white hover:text-accent-gold"
                  >
                    <LogOut size={18} className="mr-2" />
                    Sair
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="btn-primary text-center" onClick={closeMenu}>Entrar</Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;