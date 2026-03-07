# Guide de Démarrage Rapide - Portfolio Full Stack

## 🚀 Démarrer Rapidement

### 1. Installation
```bash
cd portfolio
npm install
npm run dev
```

Visitez `http://localhost:5174` pour voir votre portfolio!

## 🎨 Personnaliser Votre Portfolio

### Option 1: Utiliser le fichier de configuration (Recommandé)

Le fichier `src/config.js` contient toutes les informations facilement modifiables:

```javascript
// Modifiez vos informations personnelles
export const personalInfo = {
  name: "Votre Nom",
  title: "Votre Titre",
  email: "votre@email.com",
};

// Ajoutez vos projets
export const projects = [
  {
    id: 1,
    title: "Mon Projet",
    description: "Description...",
    tech: ["React", "Node.js"],
    link: "https://...",
  },
  // ...
];
```

### Option 2: Modifier les composants directement

Éditez les fichiers dans `src/components/` pour un contrôle plus fin:

- `Hero.jsx` - Section d'accueil
- `About.jsx` - À propos
- `Skills.jsx` - Compétences
- `Projects.jsx` - Projets
- `Contact.jsx` - Contact

## 🎨 Personnaliser les Couleurs

**Méthode 1: Fichier CSS**
Éditez `src/index.css`:
```css
:root {
  --primary-color: #64c8ff;    /* Votre couleur primaire */
  --secondary-color: #a855f7;  /* Votre couleur secondaire */
  --bg-dark: #0a0a14;          /* Couleur de fond */
}
```

**Méthode 2: Fichier de configuration**
Éditez le thème dans `src/config.js`:
```javascript
export const theme = {
  colors: {
    primary: "#votre_couleur",
    secondary: "#votre_couleur",
  },
};
```

## 📝 Ajouter Vos Projets

Dans `src/config.js`, modifiez le tableau `projects`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Titre du Projet",
    description: "Description courte...",
    tech: ["React", "Node.js", "MongoDB"],
    image: "🎨",  // Emoji ou URL d'image
    link: "https://lien-du-projet.com",
    featured: true,  // Afficher en avant plan
  },
  // Ajoutez plus de projets...
];
```

## 💼 Mettre à Jour Vos Compétences

Éditez les compétences dans `src/config.js`:

```javascript
export const skills = {
  frontend: {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "Vue.js", "TypeScript"],
  },
  // ...
};
```

## 📧 Intégrer un Formulaire de Contact

Par défaut, le formulaire affiche un message de succès. Pour le connecter vraiment:

### Avec Formspree:
1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte et enregistrez votre email
3. Modifiez `src/components/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

## 🌐 Ajouter Vos Liens Sociaux

Éditez `src/config.js`:

```javascript
export const socialLinks = {
  github: "https://github.com/votre-username",
  linkedin: "https://linkedin.com/in/votre-profil",
  twitter: "https://twitter.com/votre-handle",
  email: "mailto:votre@email.com",
};
```

Puis mettez à jour les liens dans les composants.

## 📱 Tester sur Mobile

```bash
npm run dev
# Visitez http://localhost:5174 sur votre téléphone
# Ou utilisez les dev tools de votre navigateur (F12)
```

## 🏗️ Builder pour Production

```bash
npm run build
# Crée un dossier 'dist' prêt à déployer
```

## 🚀 Déployer Votre Portfolio

### Sur Vercel (Recommandé - c'est gratuit!)

1. **Créez un compte sur [vercel.com](https://vercel.com)**

2. **Poussez votre code sur GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-username/portfolio
git push -u origin main
```

3. **Sur Vercel:**
   - Cliquez sur "New Project"
   - Importez votre repo GitHub
   - Cliquez sur "Deploy"
   - Voilà! 🎉

### Sur Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre repo GitHub
3. Déploiement automatique!

### Sur GitHub Pages

1. Installez `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Modifiez `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Déployez:
```bash
npm run deploy
```

## 🎯 Checklist Avant Déploiement

- [ ] Mettez à jour votre nom et titre
- [ ] Changez l'email de contact
- [ ] Ajoutez vos vrais projets
- [ ] Mettez à jour vos compétences
- [ ] Ajoutez vos liens sociaux
- [ ] Testez le responsive design
- [ ] Vérifiez les animations
- [ ] Testez tous les liens
- [ ] Buildez et prévisualisez avec `npm run build && npm run preview`

## 🆘 Dépannage

**Le port 5174 est déjà utilisé?**
```bash
npm run dev -- --port 3000
```

**Erreurs d'imports?**
```bash
npm install
```

**Animations ne fonctionnent pas?**
Assurez-vous que `framer-motion` est installé:
```bash
npm install framer-motion
```

**Styles CSS ne s'appliquent pas?**
Videz le cache:
- Appuyez sur `Ctrl+F5` (Windows) ou `Cmd+Shift+R` (Mac)
- Ou videz le cache de votre navigateur

## 📚 Ressources Utiles

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Astuces Avancées

1. **Ajouter Google Analytics:**
   - Installez `react-ga4`
   - Intégrez-le dans `main.jsx`

2. **Ajouter un mode clair (Light Mode):**
   - Créez un context pour gérer le thème
   - Sauvegardez la préférence en localStorage

3. **Améliorer les animations:**
   - Utilisez les variants de Framer Motion
   - Testez avec des easing différentes

## 📞 Support

Besoin d'aide? Consultez:
- Commentaires du code
- Documentation Framer Motion
- Communauté React

---

**Happy Coding! 🚀✨**
