FROM node:20.0.0-alpine

WORKDIR /app

COPY ./package*.json /app/

COPY . .

RUN npm install

EXPOSE 1337

ENTRYPOINT ["/bin/sh", "-c" , "npm run build && npm run start"]
