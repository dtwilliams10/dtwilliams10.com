### STAGE 1: Build ###
FROM node:current-alpine as builder
WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN yarn install --network-timeout 100000
RUN yarn global add react-scripts
COPY . /usr/src/app
RUN yarn build

### STAGE 2: Production Environment ###
FROM nginx:alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
