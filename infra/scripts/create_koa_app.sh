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
 docker run -d --rm --name koa-creation -v $(pwd)/my-koa:/my-koa --workdir /my-koa node:8.16.0-alpine sh -c 'npm init -y && touch app.js'