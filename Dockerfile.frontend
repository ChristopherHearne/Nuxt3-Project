FROM node:14-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install && npm cache clean --force

COPY . .

ENV HOST=0.0.0.0

ENV PATH ./node-modules/.bin/:$PATH