FROM node:14.16.0-alpine

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "node", "./bin/www" ]