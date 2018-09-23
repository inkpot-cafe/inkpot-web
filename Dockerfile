FROM node:8-alpine

# Create app directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install
RUN npm install react-scripts@1.1.1 -g

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]