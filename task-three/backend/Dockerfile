# Użyj oficjalnego obrazu Node.js jako bazowego obrazu
FROM node:14

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki projektu (package.json i package-lock.json) do katalogu roboczego
COPY package*.json ./

# Zainstaluj zależności npm
RUN npm install

# Skopiuj pozostałe pliki projektu do katalogu roboczego
COPY . .

# Kompiluj kod TypeScript
RUN npm run build

# Port, na którym będzie działać serwer backendowy
EXPOSE 3001

# Uruchom serwer backendowy po zbudowaniu kontenera
CMD ["npm", "start"]
