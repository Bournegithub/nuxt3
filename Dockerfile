FROM node:18.17.0-alpine

RUN mkdir -p /nodeServer/nuxt3

WORKDIR /nodeServer/nuxt3

COPY . /nodeServer/nuxt3/.output/

ENTRYPOINT ["node",".output/server/index.mjs"]