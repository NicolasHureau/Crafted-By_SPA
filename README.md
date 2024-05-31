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

    COLADA!!! :P

### 8 - Docker

#### Dockerfile

"FROM" pour indiquer l'image docker utiliser pour le build (choisi parmi celles sur dockerhub)

"WORKDIR" permet de déterminer un dossier de travail pour les commandes suivantes

"RUN npm run build" vas minifier le projet pour la prod dans le dossier "/dist"

Une fois le multi-stage opéré on copie donc le projet minifier dans le dossier utilisé par nginx pour l'accé au projet : 
"COPY --from=builder /app/dist /usr/share/nginx/html"

### docker-compose

