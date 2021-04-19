FROM node:alpine as builder

WORKDIR '/app'

RUN npm install
RUN npm i -g webpack-cli webpack webpack-merge
COPY . . 
RUN npm run build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default/conf
COPY --from=builder /app/dist /usr/share/nginx/html
