FROM node:18-alpine as build

# work dir
WORKDIR /app

# copy package.json
COPY package*.json ./
RUN npm install

# copy files
COPY . .

# RUN npm start
EXPOSE 5173

# Rozpocznij Nginx
CMD ["npm", "start"]