FROM node:18.17-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.17-alpine as production

ENV PORT=5000
ENV APP_DIR=/app
ENV GOOGLE_API_KEY=${GOOGLE_API_KEY}
ENV MAX_VIDEO_RESULTS=${MAX_VIDEO_RESULTS}
ENV MAX_KEYWORD_DISPLAY = ${MAX_KEYWORD_DISPLAY}

WORKDIR /app

COPY package*.json ./
COPY --from=builder ${APP_DIR}/node_modules ./node_modules
COPY --from=builder ${APP_DIR}/dist ./dist

EXPOSE ${PORT}

CMD ["npm", "run", "start"]