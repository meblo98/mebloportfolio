import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <h2 className="section-title">À propos</h2>
            <p>
              Je suis Mouhamed El Bachir Lo, développeur Web Full Stack basé au Sénégal avec plus de 4 ans d'expérience dans la conception et le développement d'applications web complexes. Je me spécialise dans la transformation de défis technologiques en solutions simples, efficaces et performantes.
            </p>
            <p>
              Ma philosophie: comprendre le problème métier avant de coder. Je travaille en étroite collaboration avec mes clients pour délivre des produits qui non seulement fonctionnent, mais qui créent également de la valeur réelle pour leurs utilisateurs.
            </p>
            <p>
              Mon approche combine expertise technique (Laravel, Angular, MySQL, Docker), bonnes pratiques de développement et compréhension des enjeux métier pour créer des applications scalables, maintenables et évolutives.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Années d'expérience</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Projets livrés</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">5k+</h3>
              <p className="stat-label">Utilisateurs actifs</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="image-wrapper">
            <div className="profile-image">
              <div className="code-animation">
                <pre>{`const meblo = {
  nom: "El Bachir Lo",
  titre: "Full Stack Dev",
  expertise: [
    "Laravel",
    "Angular",
    "Docker"
  ],
  passion: "Résoudre ✓",
  location: "🇸🇳 Sénégal"
}`}</pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
