// Animations réutilisables avec Framer Motion

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const scaleInSmall = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

// Container pour animations en cascade
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const containerVariantsNoDelay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animations de hover
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverScaleLarge = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -10,
  boxShadow: '0 20px 40px rgba(100, 200, 255, 0.2)',
  transition: { duration: 0.3 },
};

// Animations de tap
export const tapScale = {
  scale: 0.95,
};

// Animations de chargement
export const spin = {
  animate: { rotate: 360 },
  transition: { duration: 2, repeat: Infinity, ease: 'linear' },
};

export const pulse = {
  animate: { opacity: [1, 0.5, 1] },
  transition: { duration: 2, repeat: Infinity },
};

export const bounce = {
  animate: { y: [-10, 0, -10] },
  transition: { duration: 1.5, repeat: Infinity },
};

// Animations de texte
export const textVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: i * 0.2 },
  }),
};

export const textChild = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

// Animation d'apparition progressive des lettres
export const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

export const letterChild = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

// Animations pour les listes
export const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

// Animations pour les cartes
export const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Animation de glissement (slide)
export const slideIn = (direction) => {
  const initialX = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
  const initialY = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

  return {
    hidden: { opacity: 0, x: initialX, y: initialY },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
};

// Animation de rotation
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
};

// Animation pour les boutons
export const buttonHover = {
  scale: 1.05,
  boxShadow: '0 0 20px rgba(100, 200, 255, 0.4)',
};

export const buttonTap = {
  scale: 0.95,
};

// Animation pour les modales
export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 25, stiffness: 500 },
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    transition: { duration: 0.3 },
  },
};

// Helper pour créer des délais aléatoires
export const getRandomDelay = (max = 0.5) => Math.random() * max;

// Helper pour créer une animation de stagger personnalisée
export const createStaggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export default {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInSmall,
  containerVariants,
  hoverScale,
  hoverLift,
  spin,
  pulse,
  bounce,
  listContainer,
  listItem,
  cardVariants,
  slideIn,
  rotateIn,
  buttonHover,
  buttonTap,
  modalBackdrop,
  modalContent,
};
