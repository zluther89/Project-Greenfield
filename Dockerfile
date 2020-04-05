FROM node:12
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install

EXPOSE 3010
CMD ["node", "./server/index.js"]
