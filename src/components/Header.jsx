import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Accueil', id: 'hero' },
    { name: 'À propos', id: 'about' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="header">
      <motion.div
        className="header-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">meblo</span>
          <span className="logo-bracket">/&gt;</span>
        </motion.div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <motion.nav
          className={`nav ${isOpen ? 'open' : ''}`}
          animate={
            isDesktop
              ? { opacity: 1, x: 0 }
              : { opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }
          }
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              className="nav-item"
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05, x: 5 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.name}
            </motion.button>
          ))}
        </motion.nav>
      </motion.div>
    </header>
  );
}
