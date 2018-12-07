FROM node:8
WORKDIR /tests
COPY . /tests
RUN npm i protractor
CMD ./node_modules/.bin/protractor
