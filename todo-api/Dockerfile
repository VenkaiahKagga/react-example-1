FROM node:boron

RUN mkdir -p /usr/src/app/config
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY config/default.json /usr/src/app/config/default.json
COPY index.js /usr/src/app/index.js

EXPOSE 8100

CMD ["npm", "run", "start"]
