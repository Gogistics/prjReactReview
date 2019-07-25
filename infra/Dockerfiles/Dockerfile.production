# build environment
FROM node:8.16.0-alpine as build
COPY ./infra/dumb-init /infra/dumb-init
RUN npm i -g create-react-app && \
    create-react-app my-app && \
    cd my-app && \
    npm run build

WORKDIR my-app

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /my-app/build /usr/share/nginx/html
COPY --from=build /infra/dumb-init /infra/dumb-init

EXPOSE 80
ENTRYPOINT ["/infra/dumb-init", "--"]
CMD ["nginx", "-g", "daemon off;"]