#!/usr/bin/env bash
set -o errexit

# Start the server for testing
./up.sh

# Shutdown
function finish {
  popd
  docker-compose down
}
pushd .
trap finish EXIT
trap finish ERR

cd ..
npm install
yarn test

yarn build
yarn minimize

echo "Subresource Integrity"
yarn srisum
