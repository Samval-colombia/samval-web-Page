# Stage 1: Build Angular SSR bundle
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install full dependency tree (includes devDeps for build tooling)
RUN npm ci --legacy-peer-deps

COPY . .

# Builds browser + server bundles into dist/samval-webPage
RUN npm run build


# Stage 2: Runtime image executing SSR server
FROM node:20-alpine AS runtime

ENV NODE_ENV=production \
    PORT=4000

WORKDIR /app

COPY package*.json ./
# Only prod deps needed at runtime
RUN npm ci --omit=dev --legacy-peer-deps

# Bring in compiled assets
COPY --from=build /app/dist ./dist

# Run as non-root user provided by base image
USER node

EXPOSE 4000

# Start the Angular SSR Express server
CMD ["npm", "run", "start:ssr"]
