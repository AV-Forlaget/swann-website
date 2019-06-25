echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d

echo "*** Generating build ***"
docker-compose exec frontend yarn generate

echo "Visit the static build at http://localhost"