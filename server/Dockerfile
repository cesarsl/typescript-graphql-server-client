FROM node:12
WORKDIR /server
ENV PORT=4000
COPY . .
RUN yarn install
EXPOSE ${PORT}
ENTRYPOINT [ "yarn", "start" ]