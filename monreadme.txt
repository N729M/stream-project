NEXTJS  13

npx create-next-app --typescript

supprimer doc.tsx 
cleaner index.tsx (laisser function vide sans import)
cleaner globals.css



TAILWIND CSS
npm install -D tailwindcss postcss autoprefixer
npm tailwindcss init -packages

modifier le content: [] de tailwind.config.js

ajouter dans globals.css les trois biblio tailwind base, components, utilities


si probleme  'parsing error cannot find babelrc' creer un fichier .babelrc Ã  la racine.
Aller sur stackoverflow copier dedans:
{
    "presets": ["next/babel"],
    "plugins": []
  }
Ensuite remplacer dans .eslintrc.json l'objet extends : reportwebvitals par:

{
  "extends": ["next/babel","next/core-web-vitals"]
}


Nextauth
npm i next-auth
sur la doc : copier le fichier des providers dans api/auth/[...nextauth].js
(les crochets signifie la partie de l'url changeante, les 3petits points signifie « route attrappe-tout » 

