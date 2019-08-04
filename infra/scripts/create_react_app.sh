# Author:
#   Alan Tai
# Program:
#   Spin up the fan systems
# Date:
#   08/02/2019

set -e

CWD=$(pwd)

finish() {
  local existcode=$?
  cd $CWD
  exit $existcode
}

trap "finish" INT TERM

# TODO: refactor the code of building Docker image and creating app
docker build -t react-pan-dev:0.0.0 -f infra/Dockerfiles/Dockerfile.creation . &&
docker run -d -v $(pwd):/my-react react-pan-dev:0.0.0 sh -c 'create-react-app my-app'