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
              Je suis développeur web full stack, formé en développement logiciel et basé à Dakar. J’interviens sur des applications métier avec Laravel et Angular, de la conception des API à la réalisation d’interfaces claires.
            </p>
            <p>
              Mon approche associe attention aux usages, intégration responsive et bases solides côté serveur : authentification, rôles, données et échanges entre services.
            </p>
            <p>
              En parallèle du développement web, j’approfondis l’<strong>analyse de données</strong> pour mieux comprendre les besoins et aider les équipes à prendre des décisions éclairées.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h3 className="stat-number">API</h3>
              <p className="stat-label">Conception & intégration</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">Web</h3>
              <p className="stat-label">Frontend & backend</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">Data</h3>
              <p className="stat-label">En cours d’apprentissage</p>
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
  nom: "Mouhamed El Bachir Lo",
  role: "Développeur Full Stack",
  stacks: ["Laravel", "Angular", "JS"],
  learning: "Data Analysis 📊",
  localisation: "Dakar, Sénégal 🇸🇳"
}`}</pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
