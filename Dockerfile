FROM node:lts as builder
LABEL authors="nicolas"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Running the script at container run to change VUE_VAR
COPY ./substitute_environment_variables.sh /docker-entrypoint.d/substitute_environment_variables.sh
RUN chmod +x /docker-entrypoint.d/substitute_environment_variables.sh

CMD ["nginx", "-g", "daemon off;"]