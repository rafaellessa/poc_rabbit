FROM node:13

WORKDIR /app

COPY ./code/package.json .

RUN npm install

CMD [ "sh", "-c", "npm run start" ]