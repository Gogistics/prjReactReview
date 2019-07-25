# Author:
#   Alan Tai
# Program:
#   Spin up the fan systems
# Date:
#   7/13/2019
# Note: Install Bash 4+ to create associate arrary

set -e

CWD=$(pwd)

finish() {
  local existcode=$?
  cd $CWD
  exit $existcode
}

trap "finish" INT TERM

# TODO: refactor the code of building Docker image and creating app
docker build -t react-pan-dev:0.0.0 -f infra/Dockerfiles/Dockerfile.development . &&
docker run -d -v $(pwd):/my-react react-pan-dev:0.0.0 sh -c 'create-react-app my-app'