FROM nginx:1.19

COPY ./dist/* /usr/share/nginx/html/
COPY ./dist/_nuxt /usr/share/nginx/html/_nuxt
