# API

[./v1/chain.json](./api/chain.json)

Run [nodeos](https://github.com/eosio/eos) or make requests to a public node.

Basic API examples:
```bash
curl http://127.0.0.1:8888/v1/chain/get_info
echo '{"block_num_or_id": 1}' | curl http://127.0.0.1:8888/v1/chain/get_block -d @-
```
