FROM node:22-alpine3.20

WORKDIR /app

COPY package*.json .

RUN npm install &&\

RUN useradd web &&\
    chown web /app

COPY ./src .

USER web

EXPOSE 3000

CMD [node, server.js]
