FROM node:12
WORKDIR /client
ENV PORT=3000
COPY . .
RUN yarn install
EXPOSE ${PORT}
ENTRYPOINT [ "yarn", "start" ]