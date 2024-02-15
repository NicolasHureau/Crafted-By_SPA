# Guide de création/installation du proget

## Démarrage

(npm 18+ needed)

### 1 - Ouvrir un terminal dans le dossier voulu et installation de Vuejs

    npm create vue@latest

    - Sans utilisation de TypeScript
    - Sans support du JSX
    - Avec Vue Router
    - Avec Pinia
    - Sans Vitest
    - Sans tests end-to-end
    - Avec ESLint
    - Avec Prettier

### 2 - installation de Tailwind

    npm install -D tailwindcss
    npx tailwindcss init

puis dans "tailwind.config.js"

    export default {
        content: ["./src/**/*.{html,js,vue}"],

ajouter dans le fichier css de base
    
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### 3 - installation de Daisyui

    npm i -D daisyui@latest

import dans "tailwind.config.js"

    import daisyui from 'daisyui'

    export default {
          plugins: [daisyui],

### 4 - lancer le serveur

    npm run dev

### 5 - Axios (https://github.com/axios/axios)

    $ npm install axios

puis import de la librairie dans le Javascript pour l'utiliser

    import axios, {isCancel, AxiosError} from 'axios';

    app.use(axios, {isCancel, AxiosError})
