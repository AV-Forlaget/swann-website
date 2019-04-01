FROM node:10.15.3

#Installing WEBPACK
RUN npm install -g nuxt

#Installing https driver
RUN apt-get update && apt-get install apt-transport-https -y