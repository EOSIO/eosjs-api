#!/usr/bin/env bash
set -o errexit
. ./dockrc.sh

set -o xtrace

# Reset the volumes
docker-compose down

# Update docker
#docker-compose pull

# Start the server for testing
docker-compose up -d
docker-compose logs -f | egrep -v 'Produced block 0' &
sleep 2

