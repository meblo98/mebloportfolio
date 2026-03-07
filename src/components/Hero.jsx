import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            <span className="wave">👋</span> Bienvenue
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Je construis des <span className="gradient-text">solutions web performantes</span> qui résolvent vos défis métier
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            Développeur Full Stack spécialisé en Laravel, Angular et Docker. Je transforme vos idées en applications robustes, scalables et innovantes. Basé au Sénégal, j'accompagne des projets de toutes tailles.
          </motion.p>

          <motion.div variants={itemVariants} className="cta-buttons">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 200, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="floating-card card-1">
            <span className="icon">💻</span>
            <p>Frontend</p>
          </div>
          <div className="floating-card card-2">
            <span className="icon">⚙️</span>
            <p>Backend</p>
          </div>
          <div className="floating-card card-3">
            <span className="icon">🐳</span>
            <p>DevOps</p>
          </div>
          <div className="floating-card card-4">
            <span className="icon">📈</span>
            <p>Scalabilité</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll</p>
      </motion.div>
    </section>
  );
}
