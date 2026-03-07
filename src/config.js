/* Configuration du Portfolio - Modifiez ces valeurs pour personnaliser votre portfolio */

// Informations personnelles
export const personalInfo = {
  name: "Mouhamed El Bachir Lo",
  pseudo: "meblo",
  title: "Développeur Web Full Stack",
  subtitle: "Laravel • Angular • PHP • JavaScript • MySQL • Docker",
  location: "Sénégal",
  email: "contact@meblo.dev",
  phone: "+221 76 XXX XXXX",
  bio: "Passionné par la création de solutions digitales robustes et scalables. Je transforme des défis complexes en applications performantes, en mettant l'accent sur la qualité du code, l'expérience utilisateur et l'architecture durable.",
};

// Réseaux sociaux
export const socialLinks = {
  github: "https://github.com/meblo",
  linkedin: "https://linkedin.com/in/mouhamed-el-bachir-lo",
  twitter: "https://twitter.com/meblo_dev",
  website: "https://meblo.dev",
  email: "mailto:contact@meblo.dev",
};

// Compétences avec niveaux
export const skills = {
  frontend: {
    category: "Frontend",
    icon: "🎨",
    items: ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
  },
  backend: {
    category: "Backend",
    icon: "⚙️",
    items: ["Laravel", "PHP", "RESTful APIs", "MySQL", "PostgreSQL", "Authentification"],
  },
  devops: {
    category: "DevOps",
    icon: "🚀",
    items: ["Docker", "Nginx", "Linux", "CI/CD", "Déploiement", "Monitoring"],
  },
  tools: {
    category: "Outils",
    icon: "🛠️",
    items: ["Git", "Composer", "NPM", "VS Code", "Postman", "MySQL Workbench"],
  },
};

// Niveaux de maîtrise
export const proficiencyLevels = [
  { name: "Laravel/PHP", level: 95 },
  { name: "Angular", level: 92 },
  { name: "JavaScript", level: 93 },
  { name: "MySQL", level: 90 },
  { name: "Docker", level: 88 },
];

// Projets
export const projects = [
  {
    id: 1,
    title: "Altopé",
    description: "Plateforme de suivi et d'évaluation pour incubateurs. Gestion complète des portefeuilles d'entreprises, suivi de performance et génération de rapports analytiques.",
    tech: ["Laravel", "Angular", "MySQL", "Docker", "Nginx"],
    image: "📊",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce",
    description: "Plateforme e-commerce complète avec catalogue intelligent, panier persistant, système de paiement intégré et gestion d'inventaire en temps réel.",
    tech: ["Laravel", "Angular", "MySQL", "REST API"],
    image: "🛒",
    link: "https://itholding.meblo.cloud",
    featured: true,
  },
  {
    id: 3,
    title: "Vendeur Pro",
    description: "Plateforme SaaS de formation marketing. Espace de cours interactif, gestion de communauté, et tableau de bord de progression pour les utilisateurs.",
    tech: ["Laravel", "PHP", "JavaScript", "MySQL", "Docker"],
    image: "📚",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Xamsa Maternité",
    description: "Système de gestion de santé materno-infantile. Suivi des grossesses, des naissances, vaccinations et consultations médicales avec historique complet.",
    tech: ["Laravel", "MySQL", "Angular", "REST API"],
    image: "👶",
    link: "#",
  },
];

// Thème et couleurs
export const theme = {
  colors: {
    primary: "#64c8ff", // Cyan
    secondary: "#a855f7", // Violet
    bgDark: "#0a0a14", // Fond sombre
    bgDarker: "#050508", // Fond plus sombre
    textLight: "#e0e0e0", // Texte clair
    textGray: "#b0b0b0", // Texte gris
    border: "rgba(100, 200, 255, 0.2)", // Bordure
  },
  fonts: {
    primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
  },
};

// Statistiques
export const stats = [
  { label: "Années d'expérience", value: "4+" },
  { label: "Projets livrés", value: "15+" },
  { label: "Utilisateurs satisfaits", value: "5k+" },
];

// Messages du formulaire
export const messages = {
  formSuccess: "Merci pour votre message! Je vous recontacterai dans les 24h.",
  formError: "Une erreur s'est produite. Veuillez réessayer ou m'envoyer un email directement.",
  formPlaceholders: {
    name: "Votre nom complet",
    email: "votre@entreprise.com",
    message: "Parlez-moi de votre projet...",
  },
};

export default {
  personalInfo,
  socialLinks,
  skills,
  proficiencyLevels,
  projects,
  theme,
  stats,
  messages,
};