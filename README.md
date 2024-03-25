# Guide de création/installation du proget

## Démarrage

(npm 18+ needed)

    nvm use 20

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

! version de nvm :

    nvm use 18

### 5 - Axios (https://github.com/axios/axios)

    $ npm install axios

puis import de la librairie dans le Javascript pour l'utiliser

    import axios, {isCancel, AxiosError} from 'axios';

    app.use(axios, {isCancel, AxiosError})

### 6 - Librairie d'icones

Comme suggéré dans les consigne, installation de :

unplugin-icons (https://github.com/unplugin/unplugin-icons) avec l'auto-import

    npm i -D unplugin-icons 

et de la librairie Phosphor (https://phosphoricons.com/).
    
    npm i -D @iconify-json/ph

### 7 - Pinia