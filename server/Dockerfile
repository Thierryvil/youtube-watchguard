FROM node:18.17-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.17-alpine as production

ENV PORT=5000
ENV APP_DIR=/app

WORKDIR /app

COPY package*.json ./
COPY --from=builder ${APP_DIR}/node_modules ./node_modules
COPY --from=builder ${APP_DIR}/dist ./dist

EXPOSE ${PORT}

CMD ["npm", "run", "start"]