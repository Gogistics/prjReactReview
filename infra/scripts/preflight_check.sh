#!/usr/local/bin/bash
# Author:
#   Alan Tai
# Program:
#   Spin up the fan systems
# Date:
#   7/13/2019
# Note: Install Bash 4+ to create associate arrary

set -e

# export variables
source $(pwd)/infra/scripts/env_variables
CWD=$(pwd)

finish() {
  local existcode=$?
  cd $CWD
  exit $existcode
}

trap "finish" INT TERM

# login registry
# docker login -u $DOCKER_REGISTRY_USER_NAME -p $DOCKER_REGISTRY_PWD $DOCKER_REGISTRY_ACCOUNT

set +e

docker build -t react-pan-dev:0.0.0 -f infra/Dockerfiles/Dockerfile.creation . &&
docker run --rm -it -v $(pwd)/my-app:/my-react react-pan-dev:0.0.0 sh -c 'npm i && npm run lint && npm test'