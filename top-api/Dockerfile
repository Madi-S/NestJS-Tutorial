FROM node:16.15-alpine
WORKDIR /opt/app
ADD package.json package.json
ADD . .
RUN npm install --legacy-peer-deps
RUN npm run build
RUN npm prune --production
CMD ["node", "./dist/main.js"]
