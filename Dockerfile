# ----------------------------
# Etapa 1: Build

FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

# Usamos npm ci para una instalación limpia basada en package-lock.json
RUN npm ci

COPY . .

# Esto generará la carpeta dist/
RUN npm run build

# ----------------------------
# Etapa 2: Servidor Nginx
# ----------------------------
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=build /app/dist/samval-web-page/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
