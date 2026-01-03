# ---------- Build stage ----------
  FROM node:25-slim AS build

  WORKDIR /app
  
  # Install dependencies first (better caching)
  COPY package.json package-lock.json* ./
  RUN npm ci
  
  # Copy source
  COPY . .
  
  # Build Vite app
  RUN npm run build
  
  # ---------- Runtime stage ----------
  FROM nginx:alpine
  
  # Remove default config if you want SPA routing later
  RUN rm /etc/nginx/conf.d/default.conf
  
  # Copy custom nginx config
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  
  # Copy build output
  COPY --from=build /app/dist /usr/share/nginx/html
  
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  