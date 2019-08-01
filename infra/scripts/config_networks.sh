#!/usr/local/bin/bash
# Author:
#   Alan Tai
# Program:
#   Configure networks for the control system and the subsystems
# Date:
#   7/13/2019

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

# create a private subnet
NETWORK_INSPECTION=$(docker network inspect "$DOCKER_NETWORK_REACT_APPS")
EXITCODE_NETWORK_INSPECTION=$?
[[ $EXITCODE_NETWORK_INSPECTION -ne 0 ]] || (echo "Network, $DOCKER_NETWORK_REACT_APPS, exists and will be reset" && docker network rm $DOCKER_NETWORK_REACT_APPS)

docker network create \
  --driver=$DOCKER_NETWORK_REACT_APPS_DRIVER \
  --gateway=$DOCKER_NETWORK_REACT_APPS_GATEWAY \
  --subnet=$DOCKER_NETWORK_REACT_APPS_SUBNET \
  $DOCKER_NETWORK_REACT_APPS

set -e

# docker logout $DOCKER_REGISTRY_ACCOUNT
