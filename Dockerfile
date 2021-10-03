FROM node:14.15.4 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
ARG API_URL
ENV VUE_APP_API $API_URL
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
