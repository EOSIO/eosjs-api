## Objects

<dl>
<dt><a href="#eos">eos</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#bytes">bytes</a> : <code>Buffer</code> | <code>hex</code></dt>
<dd></dd>
<dt><a href="#getCodeResult">getCodeResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getAbiResult">getAbiResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getRawCodeAndAbiResult">getRawCodeAndAbiResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#abiJsonToBinResult">abiJsonToBinResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#abiBinToJsonResult">abiBinToJsonResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTableRowsResult">getTableRowsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getCurrencyStatsResult">getCurrencyStatsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getProducersResult">getProducersResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getProducerScheduleResult">getProducerScheduleResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getScheduledTransactionsResult">getScheduledTransactionsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pushBlockResult">pushBlockResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pushTransactionResult">pushTransactionResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getActionsResult">getActionsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTransactionResult">getTransactionResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getKeyAccountsResult">getKeyAccountsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getControlledAccountsResult">getControlledAccountsResult</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="eos"></a>

## eos : <code>object</code>
**Kind**: global namespace  

* [eos](#eos) : <code>object</code>
    * [.getInfo()](#eos.getInfo) ⇒ <code>string</code>
    * [.getAccount(account_name)](#eos.getAccount) ⇒ <code>string</code>
    * [.getCode(account_name, [code_as_wasm])](#eos.getCode) ⇒ [<code>getCodeResult</code>](#getCodeResult)
    * [.getAbi(account_name)](#eos.getAbi) ⇒ [<code>getAbiResult</code>](#getAbiResult)
    * [.getRawCodeAndAbi(account_name)](#eos.getRawCodeAndAbi) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
    * [.abiJsonToBin(code, action, args)](#eos.abiJsonToBin) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
    * [.abiBinToJson(code, action, binargs)](#eos.abiBinToJson) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
    * [.getRequiredKeys(transaction, available_keys)](#eos.getRequiredKeys) ⇒ <code>Set.&lt;public_key&gt;</code>
    * [.getBlock(block_num_or_id)](#eos.getBlock) ⇒ <code>variant</code>
    * [.getBlockHeaderState(block_num_or_id)](#eos.getBlockHeaderState) ⇒ <code>string</code>
    * [.getTableRows([json], code, scope, table, table_key, [lower_bound], [upper_bound], [limit], key_type, index_position)](#eos.getTableRows) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
    * [.getCurrencyBalance(code, account, symbol)](#eos.getCurrencyBalance) ⇒ <code>Array.&lt;asset&gt;</code>
    * [.getCurrencyStats(code, symbol)](#eos.getCurrencyStats) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
    * [.getProducers([json], lower_bound, [limit])](#eos.getProducers) ⇒ [<code>getProducersResult</code>](#getProducersResult)
    * [.getProducerSchedule()](#eos.getProducerSchedule) ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
    * [.getScheduledTransactions([json], lower_bound, [limit])](#eos.getScheduledTransactions) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
    * [.pushBlock(block)](#eos.pushBlock)
    * [.pushTransaction(signed_transaction)](#eos.pushTransaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
    * [.pushTransactions(signed_transaction)](#eos.pushTransactions) ⇒ <code>vector.&lt;push_transaction.results&gt;</code>
    * [.getActions(account_name, [pos], [offset])](#eos.getActions) ⇒ [<code>getActionsResult</code>](#getActionsResult)
    * [.getTransaction(id, [block_num_hint])](#eos.getTransaction) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
    * [.getKeyAccounts(public_key)](#eos.getKeyAccounts) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
    * [.getControlledAccounts(controlling_account)](#eos.getControlledAccounts) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)

<a name="eos.getInfo"></a>

### eos.getInfo() ⇒ <code>string</code>
Return general network information.

**Kind**: static method of [<code>eos</code>](#eos)  
**Example**  
```js
url_path: `/v1/chain/get_info`
```
**Example**  
```js
eos.getInfo({})
```
<a name="eos.getAccount"></a>

### eos.getAccount(account_name) ⇒ <code>string</code>
Fetch a blockchain account

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_account`
```
**Example**  
```js
eos.getAccount(account_name)
```
<a name="eos.getCode"></a>

### eos.getCode(account_name, [code_as_wasm]) ⇒ [<code>getCodeResult</code>](#getCodeResult)
Fetch smart contract code

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default |
| --- | --- | --- |
| account_name | <code>name</code> |  | 
| [code_as_wasm] | <code>bool</code> | <code>false</code> | 

**Example**  
```js
url_path: `/v1/chain/get_code`
```
**Example**  
```js
eos.getCode(account_name, code_as_wasm)
```
<a name="eos.getAbi"></a>

### eos.getAbi(account_name) ⇒ [<code>getAbiResult</code>](#getAbiResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_abi`
```
**Example**  
```js
eos.getAbi(account_name)
```
<a name="eos.getRawCodeAndAbi"></a>

### eos.getRawCodeAndAbi(account_name) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_raw_code_and_abi`
```
**Example**  
```js
eos.getRawCodeAndAbi(account_name)
```
<a name="eos.abiJsonToBin"></a>

### eos.abiJsonToBin(code, action, args) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
Manually serialize json into binary hex.  The binayargs is usually stored in Action.data.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| action | <code>name</code> | 
| args | [<code>bytes</code>](#bytes) | 

**Example**  
```js
url_path: `/v1/chain/abi_json_to_bin`
```
**Example**  
```js
eos.abiJsonToBin(code, action, args)
```
<a name="eos.abiBinToJson"></a>

### eos.abiBinToJson(code, action, binargs) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
Convert bin hex back into Abi json definition.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| action | <code>name</code> | 
| binargs | [<code>bytes</code>](#bytes) | 

**Example**  
```js
url_path: `/v1/chain/abi_bin_to_json`
```
**Example**  
```js
eos.abiBinToJson(code, action, binargs)
```
<a name="eos.getRequiredKeys"></a>

### eos.getRequiredKeys(transaction, available_keys) ⇒ <code>Set.&lt;public_key&gt;</code>
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| transaction | <code>transaction</code> | 
| available_keys | <code>set.&lt;public_key&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_required_keys`
```
**Example**  
```js
eos.getRequiredKeys(transaction, available_keys)
```
<a name="eos.getBlock"></a>

### eos.getBlock(block_num_or_id) ⇒ <code>variant</code>
Fetch a block from the blockchain.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| block_num_or_id | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block`
```
**Example**  
```js
eos.getBlock(block_num_or_id)
```
<a name="eos.getBlockHeaderState"></a>

### eos.getBlockHeaderState(block_num_or_id) ⇒ <code>string</code>
Fetch the minimum state necessary to validate transaction headers.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| block_num_or_id | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block_header_state`
```
**Example**  
```js
eos.getBlockHeaderState(block_num_or_id)
```
<a name="eos.getTableRows"></a>

### eos.getTableRows([json], code, scope, table, table_key, [lower_bound], [upper_bound], [limit], key_type, index_position) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
Fetch smart contract data from an account.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| code | <code>name</code> |  |  |
| scope | <code>string</code> |  |  |
| table | <code>name</code> |  |  |
| table_key | <code>string</code> |  |  |
| [lower_bound] | <code>string</code> | <code>0</code> |  |
| [upper_bound] | <code>string</code> | <code>-1</code> |  |
| [limit] | <code>uint32</code> | <code>10</code> |  |
| key_type | <code>string</code> |  | The key type of --index, primary only supports (i64), all others support (i64, i128, i256, float64, float128). Special type 'name' indicates an account name. |
| index_position | <code>string</code> |  | 1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc |

**Example**  
```js
url_path: `/v1/chain/get_table_rows`
```
**Example**  
```js
eos.getTableRows(json, code, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position)
```
<a name="eos.getCurrencyBalance"></a>

### eos.getCurrencyBalance(code, account, symbol) ⇒ <code>Array.&lt;asset&gt;</code>
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| account | <code>name</code> | 
| symbol | <code>optional.&lt;string&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_currency_balance`
```
**Example**  
```js
eos.getCurrencyBalance(code, account, symbol)
```
<a name="eos.getCurrencyStats"></a>

### eos.getCurrencyStats(code, symbol) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| symbol | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_currency_stats`
```
**Example**  
```js
eos.getCurrencyStats(code, symbol)
```
<a name="eos.getProducers"></a>

### eos.getProducers([json], lower_bound, [limit]) ⇒ [<code>getProducersResult</code>](#getProducersResult)
Fetch smart contract data from producer.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default |
| --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> | 
| lower_bound | <code>string</code> |  | 
| [limit] | <code>uint32</code> | <code>50</code> | 

**Example**  
```js
url_path: `/v1/chain/get_producers`
```
**Example**  
```js
eos.getProducers(json, lower_bound, limit)
```
<a name="eos.getProducerSchedule"></a>

### eos.getProducerSchedule() ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
**Kind**: static method of [<code>eos</code>](#eos)  
**Example**  
```js
url_path: `/v1/chain/get_producer_schedule`
```
**Example**  
```js
eos.getProducerSchedule()
```
<a name="eos.getScheduledTransactions"></a>

### eos.getScheduledTransactions([json], lower_bound, [limit]) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| lower_bound | <code>string</code> |  | timestamp OR transaction ID |
| [limit] | <code>uint32</code> | <code>50</code> |  |

**Example**  
```js
url_path: `/v1/chain/get_scheduled_transactions`
```
**Example**  
```js
eos.getScheduledTransactions(json, lower_bound, limit)
```
<a name="eos.pushBlock"></a>

### eos.pushBlock(block)
Append a block to the chain database.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| block | <code>signed_block</code> | 

**Example**  
```js
url_path: `/v1/chain/push_block`
```
**Example**  
```js
eos.pushBlock(block)
```
<a name="eos.pushTransaction"></a>

### eos.pushTransaction(signed_transaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
Attempts to push the transaction into the pending queue.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| signed_transaction | <code>signed_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transaction`
```
**Example**  
```js
eos.pushTransaction(signed_transaction)
```
<a name="eos.pushTransactions"></a>

### eos.pushTransactions(signed_transaction) ⇒ <code>vector.&lt;push_transaction.results&gt;</code>
Attempts to push transactions into the pending queue.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| signed_transaction | <code>signed_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transactions`
```
**Example**  
```js
eos.pushTransactions(signed_transaction)
```
<a name="eos.getActions"></a>

### eos.getActions(account_name, [pos], [offset]) ⇒ [<code>getActionsResult</code>](#getActionsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Description |
| --- | --- | --- |
| account_name | <code>account_name</code> |  |
| [pos] | <code>int32</code> | An absolute sequence positon -1 is the end/last action |
| [offset] | <code>int32</code> | The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset) |

**Example**  
```js
url_path: `/v1/history/get_actions`
```
**Example**  
```js
eos.getActions(account_name, pos, offset)
```
<a name="eos.getTransaction"></a>

### eos.getTransaction(id, [block_num_hint]) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
Retrieve a transaction from the blockchain.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| id | <code>transaction_id_type</code> | 
| [block_num_hint] | <code>uint32</code> | 

**Example**  
```js
url_path: `/v1/history/get_transaction`
```
**Example**  
```js
eos.getTransaction(id, block_num_hint)
```
<a name="eos.getKeyAccounts"></a>

### eos.getKeyAccounts(public_key) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| public_key | <code>public_key_type</code> | 

**Example**  
```js
url_path: `/v1/history/get_key_accounts`
```
**Example**  
```js
eos.getKeyAccounts(public_key)
```
<a name="eos.getControlledAccounts"></a>

### eos.getControlledAccounts(controlling_account) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| controlling_account | <code>account_name</code> | 

**Example**  
```js
url_path: `/v1/history/get_controlled_accounts`
```
**Example**  
```js
eos.getControlledAccounts(controlling_account)
```
<a name="bytes"></a>

## bytes : <code>Buffer</code> \| <code>hex</code>
**Kind**: global typedef  
<a name="getCodeResult"></a>

## getCodeResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| wast | <code>string</code> | 
| wasm | <code>string</code> | 
| code_hash | <code>sha256</code> | 
| abi | <code>optional.&lt;abi_def&gt;</code> | 

<a name="getAbiResult"></a>

## getAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| [abi] | <code>abi_def</code> | 

<a name="getRawCodeAndAbiResult"></a>

## getRawCodeAndAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| wasm | [<code>bytes</code>](#bytes) | 
| [abi] | <code>abi_def</code> | 

<a name="abiJsonToBinResult"></a>

## abiJsonToBinResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| binargs | [<code>bytes</code>](#bytes) | 

<a name="abiBinToJsonResult"></a>

## abiBinToJsonResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| args | [<code>bytes</code>](#bytes) | 

<a name="getTableRowsResult"></a>

## getTableRowsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | One row per item, either encoded as hex String or JSON object |
| more | <code>bool</code> | True if last element in data is not the end and sizeof data() < limit |

<a name="getCurrencyStatsResult"></a>

## getCurrencyStatsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| supply | <code>asset</code> | 
| max_supply | <code>asset</code> | 
| issuer | <code>account_name</code> | 

<a name="getProducersResult"></a>

## getProducersResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | one row per item, either encoded as hex String or JSON object |
| total_producer_vote_weight | <code>double</code> | total vote |
| more | <code>string</code> | fill lower_bound with this value to fetch more rows |

<a name="getProducerScheduleResult"></a>

## getProducerScheduleResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vector | <code>proposed</code> | 

<a name="getScheduledTransactionsResult"></a>

## getScheduledTransactionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vector | <code>transactions</code> |  |
| more | <code>string</code> | fill lower_bound with this to fetch next set of transactions |

<a name="pushBlockResult"></a>

## pushBlockResult : <code>object</code>
**Kind**: global typedef  
<a name="pushTransactionResult"></a>

## pushTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| transaction_id | <code>fixed_bytes32</code> | 
| processed | [<code>bytes</code>](#bytes) | 

<a name="getActionsResult"></a>

## getActionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| actions | <code>Array.&lt;ordered_action_result&gt;</code> | 
| last_irreversible_block | <code>uint32</code> | 
| [time_limit_exceeded_error] | <code>bool</code> | 

<a name="getTransactionResult"></a>

## getTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>transaction_id_type</code> | 
| trx | <code>variant</code> | 
| block_time | <code>block_timestamp_type</code> | 
| block_num | <code>uint32</code> | 
| last_irreversible_block | <code>uint32</code> | 
| traces | <code>Array.&lt;variant&gt;</code> | 

<a name="getKeyAccountsResult"></a>

## getKeyAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_names | <code>Array.&lt;account_name&gt;</code> | 

<a name="getControlledAccountsResult"></a>

## getControlledAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| controlled_accounts | <code>Array.&lt;account_name&gt;</code> | 

