FROM nginx:alpine

COPY . /tmp

WORKDIR /tmp
RUN apk update
RUN apk add yarn
RUN yarn install
RUN yarn build
RUN rm -rf /usr/share/nginx/html
RUN mv dist /usr/share/nginx/html

WORKDIR /
RUN rm -rf /tmp
RUN apk del yarn
