FROM node:alpine AS build
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build
RUN ls /dist

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist /usr/share/nginx/html