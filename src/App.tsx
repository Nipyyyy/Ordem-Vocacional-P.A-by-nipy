import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Test from './pages/Test';
import Results from './pages/Results';
import RPGInfo from './pages/RPGInfo';
import TokensAndMaps from './pages/TokensAndMaps';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-dark-blue to-dark-purple text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/teste" element={<Test />} />
              <Route path="/resultados" element={<Results />} />
              <Route path="/rpg" element={<RPGInfo />} />
              <Route path="/tokens-e-mapas" element={<TokensAndMaps />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App