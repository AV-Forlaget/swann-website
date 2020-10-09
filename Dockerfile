FROM nginx:1.19

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/* /var/www/dist/
COPY ./dist/_nuxt /var/www/dist/_nuxt
