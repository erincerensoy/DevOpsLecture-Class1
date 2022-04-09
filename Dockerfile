# FROM node:12
FROM 991859083081.dkr.ecr.eu-west-1.amazonaws.com/devops-lecture:node

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

RUN npm install

# If you are building your code for production

# RUN npm ci --only=production

# Bundle app source

COPY . .

EXPOSE 8080

CMD [ "node", "src/app.js" ]

