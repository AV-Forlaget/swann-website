echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d frontend

echo "*** Updating node dependencies... ***"
#docker-compose exec frontend node -v  > .nvmrc
docker-compose exec frontend yarn install

echo "*** Running Gulp .. ***"
docker-compose exec frontend yarn run dev