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
# build Docker images and push to docker registry

# build base img
docker build -t alantai/react_pan_dev:0.0.0 \
  -f ./infra/Dockerfiles/Dockerfile.development .

docker run -d --name react_pan_dev \
  --network $DOCKER_NETWORK_REACT_APPS \
  -p 80:80 \
  --ip 179.99.0.10 \
  --log-opt mode=non-blocking \
  --log-opt max-buffer-size=4m \
  --log-opt max-size=100m \
  --log-opt max-file=5 \
  alantai/react_pan_dev:0.0.0

set -e

# docker logout $DOCKER_REGISTRY_ACCOUNT
