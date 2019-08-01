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

set +e

config_networks=$PWD/infra/scripts/config_networks.sh
spin_up_dbs=$PWD/infra/scripts/spin_up_dbs.sh
spin_up_koa=$PWD/infra/scripts/spin_up_koa.sh
spin_up_app=$PWD/infra/scripts/spin_up_app.sh

if [[ -f $config_networks &&
    -f $spin_up_dbs &&
    -f $spin_up_koa &&
    -f $spin_up_app ]]; then
./infra/scripts/config_networks.sh &&
./infra/scripts/spin_up_dbs.sh &&
./infra/scripts/spin_up_koa.sh  &&
./infra/scripts/spin_up_app.sh
else
    echo "Some files are missing"
    exit 1
fi