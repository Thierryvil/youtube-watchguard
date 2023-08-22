FROM node:18.17-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

FROM node:18.17-alpine AS production

WORKDIR /app

COPY --from=build /app/dist ./
COPY --from=build /app/node_modules ./node_modules

ENV NODE_ENV=production

EXPOSE 5000

CMD ["node", "main.js"]