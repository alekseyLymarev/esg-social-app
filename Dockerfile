FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app
COPY package.json package-lock.json ./

RUN npm install

RUN npm run build

FROM nginx:latest

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/local/app/dist/esg-social /usr/share/nginx/html

EXPOSE 80
