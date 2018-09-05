FROM node:8 AS base

FROM skycatch/secrets as secrets

FROM base as dependencies

COPY --from=secrets /root/.ssh /root/.ssh
COPY --from=secrets /root/.gitconfig /root/.gitconfig
COPY --from=secrets /root/.npmrc /root/.npmrc

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install --production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
