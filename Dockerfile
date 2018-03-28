FROM node

USER root

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install -g @angular/cli@1.6.5 --unsafe

EXPOSE 4200
EXPOSE 49153