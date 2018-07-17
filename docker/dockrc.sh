
function cleos() {
  docker-compose exec keosd cleos -u http://nodeosd:8888 --wallet-url http://localhost:8900 "$@"
}

function keosd() {
  docker exec docker_nodeosd_1 keosd "$@"
}

function pkill() {
  docker exec docker_nodeosd_1 pkill "$@"
}
