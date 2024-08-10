FROM node:22-alpine3.20

WORKDIR /app

RUN addgroup web &&\
    adduser -D web -G web &&\
    chown web /app

COPY ./src .

RUN npm install 

USER web

EXPOSE 3000

CMD ["node", "server.js"]
