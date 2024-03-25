FROM node:20-alpine

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 5050

#ensure to run the test before running the server
#CMD ["npm", "run", "test"] 

#run for testing front and backend together

CMD [ "node","index.mjs" ] 

