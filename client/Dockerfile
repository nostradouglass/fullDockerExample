FROM node:alpine as builder

WORKDIR '/app'

RUN npm install
COPY . . 
RUN npm run build

FROM nginx
EXPOSE 4000
COPY ./nginx/default.conf /etc/nginx/conf.d/default/conf
COPY --from=builder /app/dist /usr/share/nginx/html
