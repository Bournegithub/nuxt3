FROM node:20.9.0-alpine

RUN mkdir -p /nodeServer/nuxt3

COPY . /nodeServer/nuxt3

WORKDIR /nodeServer/nuxt3

ENV HOST 0.0.0.0

ENV PORT 3002

RUN yarn install

EXPOSE 3002

ENTRYPOINT ["node",".output/server/index.mjs"]