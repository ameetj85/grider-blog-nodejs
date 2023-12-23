FROM node:alpine

# create-react-app currently has two bugs that prevent it from running correctly in a docker container
# The solution is to add the two variables shown below
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]