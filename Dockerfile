FROM node:8
WORKDIR /tests
COPY . /tests
RUN npm i protractor
RUN ls -alh *
CMD ./node_modules/.bin/protractor
