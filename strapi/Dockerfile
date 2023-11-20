FROM node:18.13-alpine3.17

WORKDIR /app

COPY ./package*.json /app/

COPY . .

RUN npm install

EXPOSE 1337

ENTRYPOINT ["/bin/sh", "-c" , "npm run build && npm run start"]
