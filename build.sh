echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d

echo "*** Generating build ***"
rm -rf dist
docker-compose exec frontend yarn generate

echo "Visit the static build at http://localhost"