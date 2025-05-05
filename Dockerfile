FROM node:lts-alpine as builder
WORKDIR /app

ARG APP_ENV=local
ENV APP_ENV=${APP_ENV}

COPY . .
RUN rm -r -f node_modules
RUN rm package-lock.json

RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps
RUN ng build --configuration ${APP_ENV}

FROM nginx:1.23.3-alpine
COPY --from=builder /app/dist/web /usr/share/nginx/html
COPY nginx/static.conf /etc/nginx/conf.d/default.conf