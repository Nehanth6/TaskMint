import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AuthModal from './components/AuthModal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const location = useLocation();
  const navigate = useNavigate();

  // Handle direct navigation to /login or /get-started
  useEffect(() => {
    if (location.pathname === '/login') {
      setAuthModal({ isOpen: true, mode: 'login' });
    } else if (location.pathname === '/get-started') {
      setAuthModal({ isOpen: true, mode: 'register' });
    }
  }, [location.pathname]);

  const handleOpenAuth = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
    if (location.pathname === '/login' || location.pathname === '/get-started') {
      navigate('/');
    }
  };

  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage onOpenAuth={handleOpenAuth} />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenAuth={handleOpenAuth} />} />
        {/* Placeholder routes that render HomePage with AuthModal open */}
        <Route path="/login" element={<HomePage onOpenAuth={handleOpenAuth} />} />
        <Route path="/get-started" element={<HomePage onOpenAuth={handleOpenAuth} />} />
        {/* Fallback to home */}
        <Route path="*" element={<HomePage onOpenAuth={handleOpenAuth} />} />
      </Routes>

      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={handleCloseAuth}
      />
    </>
  );
}
