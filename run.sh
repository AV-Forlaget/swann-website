echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d

echo "*** Updating node dependencies... ***"
docker-compose exec kluboplevelser_frontend node -v  > .nvmrc
docker-compose exec kluboplevelser_frontend npm install

echo "*** Running Gulp .. ***"
docker-compose exec kluboplevelser_frontend npm run dev