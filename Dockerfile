FROM node:8
COPY . /tests
RUN npm i protractor
CMD ./node_modules/.bin/protractor
