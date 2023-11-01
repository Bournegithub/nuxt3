FROM node:20.9.0-alpine

RUN mkdir -p /nodeServer/nuxt3

COPY . /nodeServer/nuxt3

WORKDIR /nodeServer/nuxt3

ENTRYPOINT ["node","server/index.mjs"]