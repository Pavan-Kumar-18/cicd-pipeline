FROM node:20
WORKDIR /Server
COPY  . .
RUN npm install
CMD [ "node", "server.js" ]