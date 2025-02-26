# Gunakan Node.js sebagai image dasar
FROM node:20-alpine

# Tentukan working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh file proyek ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Ekspose port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]