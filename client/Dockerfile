FROM node:12
WORKDIR /client
ENV PORT=3000
ENV REACT_APP_APOLLO_PORT=8080
COPY . .
RUN yarn install
RUN yarn build
EXPOSE ${PORT}
ENTRYPOINT [ "yarn", "serve", "-s", "build" ]