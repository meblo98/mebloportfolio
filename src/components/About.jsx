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
              Développeur web passionné avec une solide expérience dans la conception d'applications robustes utilisant Laravel et Angular. Je me spécialise dans la création et la consommation d'API REST, ainsi que dans le développement de dashboards dynamiques et performants.
            </p>
            <p>
              Mon expertise couvre l'ensemble du cycle de développement, de l'intégration UI/UX responsive à la gestion de l'authentification complexe et des rôles utilisateurs. J'accorde une importance capitale à l'ergonomie et à la sécurité de mes solutions.
            </p>
            <p>
              Tourné vers l'avenir, j'approfondis actuellement mes compétences en <strong>Analyse de Données</strong> pour apporter une dimension prédictive et analytique à mes futurs développements web.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h3 className="stat-number">2025</h3>
              <p className="stat-label">Objectif : Data Analysis</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">Full</h3>
              <p className="stat-label">Stack Developer</p>
            </div>
            <div className="stat">
              <h3 className="stat-number">Dakar</h3>
              <p className="stat-label">Sénégal</p>
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
