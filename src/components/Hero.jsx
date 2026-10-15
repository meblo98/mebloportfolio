import { motion } from 'framer-motion';
import { personalInfo } from '../config';
import './Hero.css';

export default function Hero() {
  const stack = ['Laravel', 'Angular', 'JavaScript', 'API REST'];

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero-greeting">
            <span className="availability-dot" /> Développeur web · {personalInfo.location}
          </p>

          <h1 className="hero-title">
            Mouhamed<br />
            <span className="hero-title-accent">El Bachir Lo.</span>
          </h1>

          <p className="hero-role">Développeur Full Stack</p>
          <p className="hero-description">
            Je crée des applications web utiles et bien pensées, du backend Laravel
            aux interfaces Angular. J’aime transformer des besoins concrets en
            expériences simples, fiables et agréables à utiliser.
          </p>

          <div className="hero-stack" aria-label="Technologies principales">
            {stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>

          <div className="cta-buttons">
            <a className="btn btn-primary" href="#projects">Découvrir mes projets <span aria-hidden="true">↗</span></a>
            <a className="btn btn-secondary" href="#contact">Parlons de votre projet</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-animation"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          aria-hidden="true"
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-terminal">
            <div className="terminal-topbar">
              <div className="terminal-controls"><i /><i /><i /></div>
              <span>meblo · profil.js</span>
              <span className="terminal-menu">•••</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-gutter">01<br />02<br />03<br />04<br />05<br />06</div>
              <pre><span className="code-keyword">const</span> <span className="code-name">developer</span> = {'{'}<br />  <span className="code-property">base</span>: <span className="code-string">"Dakar, Sénégal"</span>,<br />  <span className="code-property">builds</span>: <span className="code-string">"web apps & APIs"</span>,<br />  <span className="code-property">stack</span>: [<span className="code-string">"Laravel"</span>,<br />          <span className="code-string">"Angular"</span>],<br />  <span className="code-property">curiousAbout</span>: <span className="code-string">"data"</span><br />{'}'}<span className="code-cursor">_</span></pre>
            </div>
            <div className="terminal-status"><span><i /> Full Stack · Dakar, Sénégal</span><span>UTF-8</span></div>
          </div>
          <div className="hero-note"><span className="hero-note-mark">M.</span><span>Du code clair,<br />des solutions utiles.</span></div>
        </motion.div>
      </div>

      <a className="scroll-indicator" href="#about"><span /> Faire défiler</a>
    </section>
  );
}
