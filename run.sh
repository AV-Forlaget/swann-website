echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d

echo "*** Updating node dependencies... ***"
docker-compose exec narrator_onboarding_frontend node -v  > .nvmrc
docker-compose exec narrator_onboarding_frontend yarn install

echo "*** Running Gulp .. ***"
docker-compose exec narrator_onboarding_frontend yarn run dev