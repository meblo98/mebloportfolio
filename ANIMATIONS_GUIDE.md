# Guide des Animations Réutilisables

Ce fichier contient des animations prêtes à l'emploi pour votre portfolio.

## 📚 Comment Utiliser

### Importer les animations

```javascript
import { fadeInUp, containerVariants, hoverScale } from '../utils/animations';
```

### Animations Simples

#### FadeInUp (Apparition vers le haut)
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contenu qui apparaît
</motion.div>

// Ou avec les variants
<motion.div variants={fadeInUp}>
  Contenu qui apparaît
</motion.div>
```

#### FadeInLeft / FadeInRight (Apparition latérale)
```javascript
<motion.div variants={fadeInLeft}>
  Contenu venant de la gauche
</motion.div>

<motion.div variants={fadeInRight}>
  Contenu venant de la droite
</motion.div>
```

#### ScaleIn (Zoom)
```javascript
<motion.div variants={scaleIn}>
  Contenu qui fait un zoom
</motion.div>
```

### Containers avec Cascade

Pour animer plusieurs éléments en cascade (l'un après l'autre):

```javascript
import { containerVariants, fadeInUp } from '../utils/animations';

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  <motion.div variants={fadeInUp}>Élément 1</motion.div>
  <motion.div variants={fadeInUp}>Élément 2</motion.div>
  <motion.div variants={fadeInUp}>Élément 3</motion.div>
</motion.div>
```

### Animations au Hover

```javascript
import { hoverScale, buttonHover } from '../utils/animations';

<motion.button
  whileHover={buttonHover}
  whileTap={{ scale: 0.95 }}
>
  Cliquez-moi
</motion.button>

<motion.div whileHover={hoverScale}>
  Survolez-moi
</motion.div>
```

### Animations en Boucle

#### Spin (Rotation)
```javascript
<motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
  ⚙️
</motion.div>
```

#### Pulse (Pulsation)
```javascript
<motion.div
  animate={{ opacity: [1, 0.5, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Contenu qui pulse
</motion.div>
```

#### Bounce (Rebond)
```javascript
<motion.div
  animate={{ y: [-10, 0, -10] }}
  transition={{ duration: 1.5, repeat: Infinity }}
>
  ⬇️ Qui rebondit
</motion.div>
```

## 🎨 Exemples Pratiques

### Exemple 1: Carte de Projet Animée
```javascript
import { motion } from 'framer-motion';
import { hoverLift, fadeInUp } from '../utils/animations';

<motion.div
  className="project-card"
  variants={fadeInUp}
  whileHover={hoverLift}
  layout
>
  <h3>Nom du projet</h3>
  <p>Description</p>
</motion.div>
```

### Exemple 2: Liste Animée
```javascript
import { listContainer, listItem } from '../utils/animations';

<motion.ul variants={listContainer} initial="hidden" animate="visible">
  <motion.li variants={listItem}>Item 1</motion.li>
  <motion.li variants={listItem}>Item 2</motion.li>
  <motion.li variants={listItem}>Item 3</motion.li>
</motion.ul>
```

### Exemple 3: Section avec Animation au Scroll
```javascript
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
>
  Cette section s'anime quand elle entre dans la vue
</motion.section>
```

### Exemple 4: Bouton avec Animations Combinées
```javascript
<motion.button
  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 200, 255, 0.4)' }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: 'spring', damping: 17, stiffness: 300 }}
>
  Bouton Interactif
</motion.button>
```

## 🛠️ Créer Vos Propres Animations

### Variant Simple
```javascript
const myAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

<motion.div variants={myAnimation}>Contenu</motion.div>
```

### Variant avec Options de Transition
```javascript
const smoothAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',        // spring, tween, inertia
      duration: 0.6,
      damping: 20,
      stiffness: 100,
      delay: 0.2,
    },
  },
};
```

## 💡 Conseils et Bonnes Pratiques

1. **Performance**: Limitez les animations sur les gros éléments
2. **Accessibilité**: Respectez `prefers-reduced-motion`:
```javascript
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

3. **Timing**: Utilisez des délais pour créer du rythme
4. **Types de Transition**:
   - `spring` : Rebond naturel
   - `tween` : Linéaire
   - `inertia` : Avec momentum

## 🎯 Cas d'Usage Courants

### Loading Indicator
```javascript
<motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
  <div className="spinner">⏳</div>
</motion.div>
```

### Notification Toast
```javascript
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
  Notification
</motion.div>
```

### Expansion/Collapse
```javascript
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
>
  Contenu qui se déplie
</motion.div>
```

## 📖 Documentation Officielle

Pour plus d'informations: [Framer Motion Docs](https://www.framer.com/motion/)

---

**Happy Animating!** ✨
