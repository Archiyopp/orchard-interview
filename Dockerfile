FROM node:22-alpine

RUN npm i -g pnpm

ENV PNPM_HOME="/pnpm"

ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY package.json .

RUN pnpm install

RUN pnpm add -g serve

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
