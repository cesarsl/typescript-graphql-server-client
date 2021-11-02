FROM node:12
WORKDIR /server
ENV PORT=4000
ENV HOST=db
COPY . .
RUN yarn install
EXPOSE ${PORT}
ENTRYPOINT [ "yarn", "start" ]