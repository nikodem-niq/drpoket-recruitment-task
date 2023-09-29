FROM node:14

# work dir app
WORKDIR /app

# copy package.json
COPY package*.json ./

# install deps
RUN npm install

# copy rest
COPY . .

# compile
RUN npm run build

# port expose
EXPOSE 3001

# start the server
CMD ["npm", "start"]
