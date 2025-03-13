# Usar Node.js como base
FROM node:20-alpine

# Crear el directorio de la app
WORKDIR /app

# Copiar archivos y dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto 3000
EXPOSE 80

# Ejecutar la app
CMD ["npm", "start"]
