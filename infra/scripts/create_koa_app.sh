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
 docker run -d --rm --name koa-creation -v $(pwd)/my-koa:/my-koa --workdir /my-koa node:8.16.0-alpine sh -c 'npm init -y && touch app.js'