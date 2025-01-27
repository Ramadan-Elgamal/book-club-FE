FROM node:18.15.0-alpine3.17 AS builder

WORKDIR /app

COPY package*.json ./

ARG VITE_API_URL

ENV VITE_API_URL=${VITE_API_URL} 

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23.1-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]