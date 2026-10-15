import { motion } from 'framer-motion';
import { useState } from 'react';
import { personalInfo, socialLinks, messages } from '../config';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Prise de contact — ${formData.name}`);
    const body = encodeURIComponent(`Bonjour Mouhamed,\n\n${formData.message}\n\n${formData.name}\n${formData.email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: personalInfo.email,
      link: socialLinks.email,
    },
    {
      icon: '📞',
      label: 'Téléphone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Mouhamed El Bachir Lo',
      link: socialLinks.linkedin,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@meblo98',
      link: socialLinks.github,
    },
    {
      icon: '🌍',
      label: 'Localisation',
      value: personalInfo.location,
      link: '#',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Me Contacter
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-methods"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Me joindre</h3>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="contact-method"
                  whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(100, 200, 255, 0.2)' }}
                >
                  <span className="method-icon">{method.icon}</span>
                  <div className="method-info">
                    <p className="method-label">{method.label}</p>
                    <p className="method-value">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={messages.formPlaceholders.name}
                required
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(100, 200, 255, 0.3)' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={messages.formPlaceholders.email}
                required
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(100, 200, 255, 0.3)' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={messages.formPlaceholders.message}
                rows="5"
                required
                whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(100, 200, 255, 0.3)' }}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? '✓ Envoyé!' : 'Envoyer le message'}
            </motion.button>

            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {messages.formSuccess}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
