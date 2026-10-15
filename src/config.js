/* Configuration du Portfolio - Modifiez ces valeurs pour personnaliser votre portfolio */

// Informations personnelles
export const personalInfo = {
  name: "Mouhamed El Bachir Lo",
  pseudo: "meblo",
  title: "Développeur Full Stack | Laravel • Angular • JavaScript",
  subtitle: "Expert en résolution de problèmes et innovation digitale.",
  location: "Dakar, Sénégal",
  email: "lomouhamedelbachir@gmail.com",
  phone: "+221 77 316 20 01",
  bio: "Développeur web passionné avec expérience en Laravel, Angular et développement d’API REST. Spécialisé en intégration UI/UX responsive, authentification et dashboards dynamiques. Actuellement en apprentissage de l’Analyse de Données pour apporter une dimension data-driven à mes projets.",
};

// Réseaux sociaux
export const socialLinks = {
  github: "https://github.com/meblo98",
  linkedin: "https://www.linkedin.com/in/mouhamed-el-bachir-lo-developpement-web/",
  email: "mailto:lomouhamedelbachir@gmail.com",
  whatsapp: "https://wa.me/221773162001",
  twitter: "https://x.com/Mouhame17780821",
  instagram: "https://www.instagram.com/meblo_barham_atijani/",
};

// Compétences par catégories
export const skills = {
  frontend: {
    category: "Frontend",
    icon: "🎨",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "Vue.js", "Bootstrap", "Tailwind"],
  },
  backend: {
    category: "Backend",
    icon: "⚙️",
    items: ["PHP", "Laravel", "Java", "Python", "Django", "REST API"],
  },
  databases: {
    category: "Bases de données",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "Firebase"],
  },
  devops: {
    category: "DevOps & Outils",
    icon: "🚀",
    items: ["Git", "GitHub", "Docker", "Nginx", "Postman", "VS Code", "Figma"],
  },
  data: {
    category: "Data",
    icon: "📊",
    items: ["Analyse de données", "Manipulation de données", "Visualisation"],
  }
};

// Expériences Professionnelles
export const experiences = [
      {
    company: "CERIP",
    period: "Septembre 2025 - Janvier 2026",
    role: "Freelance",
    description: [
      "Développement d’applications Angular & Laravel",
      "Création et consommation d’API REST",
      "Authentification et gestion des rôles",
      "Travail en équipe agile avec Git"
    ]
  },
    {
    company: "Tacktyl Labs",
    period: "Septembre 2025 - Decembre 2025",
    role: "Prestation",
    description: [
      "Développement d’applications Angular & Laravel",
      "Création et consommation d’API REST",
      "Authentification et gestion des rôles",
      "Travail en équipe agile avec Git"
    ]
  },
  {
    company: "Tacktyl Labs",
    period: "Février 2025 - Août 2025",
    role: "Stage",
    description: [
      "Développement d’applications Angular & Laravel",
      "Création et consommation d’API REST",
      "Authentification et gestion des rôles",
      "Travail en équipe agile avec Git"
    ]
  },
  {
    company: "Defarci",
    period: "Octobre 2023 - 1 mois",
    role: "Intégrateur Web",
    description: [
      "Intégration HTML/CSS",
      "Composants dynamiques JavaScript",
      "Collaboration Git"
    ]
  }
];

// Formations
export const education = [

  {
    degree: "CPS Développement Web & Web Mobile",
    school: "Simplon Sénégal",
    year: "2024"
  },
  {
    degree: "Licence 3 Génie Logiciel & Sécurité",
    school: "Institut Polytechnique des Métiers",
    year: "2022"
  },
  {
    degree: "Licence 2 Physique Chimie",
    school: "FST - UCAD",
    year: "2022"
  },
  {
    degree: "Baccalauréat S2",
    school: "Lycée Keur Madiabel",
    year: "2020"
  }
];

// Certifications
export const certifications = [
  { name: "Certificat Développement Web Full Stack", provider: "Xarala" },
  { name: "Certificat Low Code / No Code", provider: "Force N" },
  { name: "Certificat Fondamentaux de la Programmation", provider: "Udacity" },
  { name: "Certificat Programmation Orientée Objet Java", provider: "Coursera" },
  { name: "Certificat Développement Mobile", provider: "Force N" }
];

// Projets
export const projects = [
  {
    id: 1,
    title: "Altopé",
    description: "Plateforme de suivi et évaluation pour incubateur.",
    tech: ["Django", "React", "PostgreSQL", "React native"],
    image: "📊",
    link: "https://www.altoppe.sn/",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce",
    description: "Plateforme de vente en ligne complète.",
    tech: ["Laravel", "MySQL", "Blade"],
    image: "🛒",
    link: "https://itholdingsn.meblo.cloud",
    featured: true,
  },
  {
    id: 3,
    title: "Kart business",
    description: "Application de carte visite numérique et NFC pour entreprises et particuliers.",
    tech: ["Laravel", "PHP", "JavaScript", "MySQL", "Flutter", "Vue.js"],
    image: "📇",
    link: "https://kart.business/",
    featured: true,
  },
  {
    id: 4,
    title: "nafabi-ai-agent ",
    description: "AI-powered personal finance assistant built with Django and Django REST Framework to manage transactions, track income and expenses, and generate financial insights securely.",
    tech: ["AI", "MySQL", "Django", "Django REST Framework"],
    image: "",
    link: "https://github.com/meblo98/nafabi-ai-agent",
    featured: true,
  },
    {
    id: 5,
    title: "ai-support-api",
    description: "AI-powered customer support API built with Laravel and Laravel AI SDK. Exploring AI agents, tool calling, secure access to business data, and the foundations of MCP and AI tool security.",
    tech: ["Laravel", "MySQL", "Laravel AI SDK", "AI Agents", "Tool Calling", "MCP", "AI Tool Security"],
    image: "",
    link: "https://github.com/meblo98/ai-support-api",
    featured: true,
  },
     {
    id: 6,
    title: "mbay-credit",
    description: "Plateforme d’accès au crédit et business plans agricoles — solutions pour faciliter micro‑crédit et dossiers bancaires adaptés aux cultures/saisons. Modèle : frais de dossier, partenariats financiers.",
    tech: ["kotlin", "Java", "MySQL", "REST API", "Angular"],
    image: "",
    link: "https://github.com/meblo98/mbay-credit",
    featured: true,
  },
];

// Thème et couleurs
export const theme = {
  colors: {
    primary: "#00d1ff", // Cyan électrique
    secondary: "#7000ff", // Violet profond
    accent: "#ffffff", // Blanc pour les accents technologiques
    bgDark: "#0a0a0c", // Fond ultra sombre
    bgDarker: "#050505", // Fond noir
    textLight: "#f0f0f0", // Texte blanc cassé
    textGray: "#a0a0a0", // Texte gris
    border: "rgba(0, 209, 255, 0.2)", // Bordure cyan translucide
  },
  fonts: {
    primary: "'Inter', sans-serif",
  },
};

// Messages du formulaire
export const messages = {
  formSuccess: "Votre application e-mail va s’ouvrir avec le message prêt à envoyer.",
  formError: "Une erreur s'est produite. Veuillez réessayer ou m'envoyer un email directement.",
  formPlaceholders: {
    name: "Votre nom complet",
    email: "votre@email.com",
    message: "Parlez-moi de votre projet...",
  },
};

export default {
  personalInfo,
  socialLinks,
  skills,
  experiences,
  education,
  certifications,
  projects,
  theme,
  messages,
};
