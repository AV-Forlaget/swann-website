FROM nginx:1.19

COPY ./assets/* /usr/share/nginx/html/
COPY ./dist/* /usr/share/nginx/html/
