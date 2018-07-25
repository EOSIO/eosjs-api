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
    * [.getAccount(accountName)](#eos.getAccount) ⇒ <code>string</code>
    * [.getCode(accountName, [codeAsWasm])](#eos.getCode) ⇒ [<code>getCodeResult</code>](#getCodeResult)
    * [.getAbi(accountName)](#eos.getAbi) ⇒ [<code>getAbiResult</code>](#getAbiResult)
    * [.getRawCodeAndAbi(accountName)](#eos.getRawCodeAndAbi) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
    * [.abiJsonToBin(code, action, args)](#eos.abiJsonToBin) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
    * [.abiBinToJson(code, action, binargs)](#eos.abiBinToJson) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
    * [.getRequiredKeys(transaction, availableKeys)](#eos.getRequiredKeys) ⇒ <code>Set.&lt;public_key&gt;</code>
    * [.getBlock(blockNumOrId)](#eos.getBlock) ⇒ <code>variant</code>
    * [.getBlockHeaderState(blockNumOrId)](#eos.getBlockHeaderState) ⇒ <code>string</code>
    * [.getTableRows([json], code, scope, table, tableKey, [lowerBound], [upperBound], [limit], keyType, indexPosition)](#eos.getTableRows) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
    * [.getCurrencyBalance(code, account, symbol)](#eos.getCurrencyBalance) ⇒ <code>Array.&lt;asset&gt;</code>
    * [.getCurrencyStats(code, symbol)](#eos.getCurrencyStats) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
    * [.getProducers([json], lowerBound, [limit])](#eos.getProducers) ⇒ [<code>getProducersResult</code>](#getProducersResult)
    * [.getProducerSchedule()](#eos.getProducerSchedule) ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
    * [.getScheduledTransactions([json], lowerBound, [limit])](#eos.getScheduledTransactions) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
    * [.pushBlock(block)](#eos.pushBlock)
    * [.pushTransaction(signedTransaction)](#eos.pushTransaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
    * [.pushTransactions(signedTransaction)](#eos.pushTransactions) ⇒ <code>vector.&lt;push_transaction.results&gt;</code>
    * [.getActions(accountName, [pos], [offset])](#eos.getActions) ⇒ [<code>getActionsResult</code>](#getActionsResult)
    * [.getTransaction(id, [blockNumHint])](#eos.getTransaction) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
    * [.getKeyAccounts(publicKey)](#eos.getKeyAccounts) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
    * [.getControlledAccounts(controllingAccount)](#eos.getControlledAccounts) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)

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

### eos.getAccount(accountName) ⇒ <code>string</code>
Fetch a blockchain account

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| accountName | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_account`
```
**Example**  
```js
eos.getAccount(accountName)
```
<a name="eos.getCode"></a>

### eos.getCode(accountName, [codeAsWasm]) ⇒ [<code>getCodeResult</code>](#getCodeResult)
Fetch smart contract code

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default |
| --- | --- | --- |
| accountName | <code>name</code> |  | 
| [codeAsWasm] | <code>bool</code> | <code>false</code> | 

**Example**  
```js
url_path: `/v1/chain/get_code`
```
**Example**  
```js
eos.getCode(accountName, codeAsWasm)
```
<a name="eos.getAbi"></a>

### eos.getAbi(accountName) ⇒ [<code>getAbiResult</code>](#getAbiResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| accountName | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_abi`
```
**Example**  
```js
eos.getAbi(accountName)
```
<a name="eos.getRawCodeAndAbi"></a>

### eos.getRawCodeAndAbi(accountName) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| accountName | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_raw_code_and_abi`
```
**Example**  
```js
eos.getRawCodeAndAbi(accountName)
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

### eos.getRequiredKeys(transaction, availableKeys) ⇒ <code>Set.&lt;public_key&gt;</code>
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| transaction | <code>transaction</code> | 
| availableKeys | <code>set.&lt;public_key&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_required_keys`
```
**Example**  
```js
eos.getRequiredKeys(transaction, availableKeys)
```
<a name="eos.getBlock"></a>

### eos.getBlock(blockNumOrId) ⇒ <code>variant</code>
Fetch a block from the blockchain.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| blockNumOrId | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block`
```
**Example**  
```js
eos.getBlock(blockNumOrId)
```
<a name="eos.getBlockHeaderState"></a>

### eos.getBlockHeaderState(blockNumOrId) ⇒ <code>string</code>
Fetch the minimum state necessary to validate transaction headers.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| blockNumOrId | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block_header_state`
```
**Example**  
```js
eos.getBlockHeaderState(blockNumOrId)
```
<a name="eos.getTableRows"></a>

### eos.getTableRows([json], code, scope, table, tableKey, [lowerBound], [upperBound], [limit], keyType, indexPosition) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
Fetch smart contract data from an account.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| code | <code>name</code> |  |  |
| scope | <code>string</code> |  |  |
| table | <code>name</code> |  |  |
| tableKey | <code>string</code> |  |  |
| [lowerBound] | <code>string</code> | <code>0</code> |  |
| [upperBound] | <code>string</code> | <code>-1</code> |  |
| [limit] | <code>uint32</code> | <code>10</code> |  |
| keyType | <code>string</code> |  | The key type of --index, primary only supports (i64), all others support (i64, i128, i256, float64, float128). Special type 'name' indicates an account name. |
| indexPosition | <code>string</code> |  | 1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc |

**Example**  
```js
url_path: `/v1/chain/get_table_rows`
```
**Example**  
```js
eos.getTableRows(json, code, scope, table, tableKey, lowerBound, upperBound, limit, keyType, indexPosition)
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

### eos.getProducers([json], lowerBound, [limit]) ⇒ [<code>getProducersResult</code>](#getProducersResult)
Fetch smart contract data from producer.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default |
| --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> | 
| lowerBound | <code>string</code> |  | 
| [limit] | <code>uint32</code> | <code>50</code> | 

**Example**  
```js
url_path: `/v1/chain/get_producers`
```
**Example**  
```js
eos.getProducers(json, lowerBound, limit)
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

### eos.getScheduledTransactions([json], lowerBound, [limit]) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| lowerBound | <code>string</code> |  | timestamp OR transaction ID |
| [limit] | <code>uint32</code> | <code>50</code> |  |

**Example**  
```js
url_path: `/v1/chain/get_scheduled_transactions`
```
**Example**  
```js
eos.getScheduledTransactions(json, lowerBound, limit)
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

### eos.pushTransaction(signedTransaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
Attempts to push the transaction into the pending queue.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| signedTransaction | <code>signed_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transaction`
```
**Example**  
```js
eos.pushTransaction(signedTransaction)
```
<a name="eos.pushTransactions"></a>

### eos.pushTransactions(signedTransaction) ⇒ <code>vector.&lt;push_transaction.results&gt;</code>
Attempts to push transactions into the pending queue.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| signedTransaction | <code>signed_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transactions`
```
**Example**  
```js
eos.pushTransactions(signedTransaction)
```
<a name="eos.getActions"></a>

### eos.getActions(accountName, [pos], [offset]) ⇒ [<code>getActionsResult</code>](#getActionsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type | Description |
| --- | --- | --- |
| accountName | <code>account_name</code> |  |
| [pos] | <code>int32</code> | An absolute sequence positon -1 is the end/last action |
| [offset] | <code>int32</code> | The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset) |

**Example**  
```js
url_path: `/v1/history/get_actions`
```
**Example**  
```js
eos.getActions(accountName, pos, offset)
```
<a name="eos.getTransaction"></a>

### eos.getTransaction(id, [blockNumHint]) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
Retrieve a transaction from the blockchain.

**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| id | <code>transaction_id_type</code> | 
| [blockNumHint] | <code>uint32</code> | 

**Example**  
```js
url_path: `/v1/history/get_transaction`
```
**Example**  
```js
eos.getTransaction(id, blockNumHint)
```
<a name="eos.getKeyAccounts"></a>

### eos.getKeyAccounts(publicKey) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| publicKey | <code>public_key_type</code> | 

**Example**  
```js
url_path: `/v1/history/get_key_accounts`
```
**Example**  
```js
eos.getKeyAccounts(publicKey)
```
<a name="eos.getControlledAccounts"></a>

### eos.getControlledAccounts(controllingAccount) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)
**Kind**: static method of [<code>eos</code>](#eos)  

| Param | Type |
| --- | --- |
| controllingAccount | <code>account_name</code> | 

**Example**  
```js
url_path: `/v1/history/get_controlled_accounts`
```
**Example**  
```js
eos.getControlledAccounts(controllingAccount)
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
| accountName | <code>name</code> | 
| wast | <code>string</code> | 
| wasm | <code>string</code> | 
| codeHash | <code>sha256</code> | 
| abi | <code>optional.&lt;abi_def&gt;</code> | 

<a name="getAbiResult"></a>

## getAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| accountName | <code>name</code> | 
| [abi] | <code>abi_def</code> | 

<a name="getRawCodeAndAbiResult"></a>

## getRawCodeAndAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| accountName | <code>name</code> | 
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
| maxSupply | <code>asset</code> | 
| issuer | <code>account_name</code> | 

<a name="getProducersResult"></a>

## getProducersResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | one row per item, either encoded as hex String or JSON object |
| totalProducerVoteWeight | <code>double</code> | total vote |
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
| transactionId | <code>fixed_bytes32</code> | 
| processed | [<code>bytes</code>](#bytes) | 

<a name="getActionsResult"></a>

## getActionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| actions | <code>Array.&lt;ordered_action_result&gt;</code> | 
| lastIrreversibleBlock | <code>uint32</code> | 
| [timeLimitExceededError] | <code>bool</code> | 

<a name="getTransactionResult"></a>

## getTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>transaction_id_type</code> | 
| trx | <code>variant</code> | 
| blockTime | <code>block_timestamp_type</code> | 
| blockNum | <code>uint32</code> | 
| lastIrreversibleBlock | <code>uint32</code> | 
| traces | <code>Array.&lt;variant&gt;</code> | 

<a name="getKeyAccountsResult"></a>

## getKeyAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| accountNames | <code>Array.&lt;account_name&gt;</code> | 

<a name="getControlledAccountsResult"></a>

## getControlledAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| controlledAccounts | <code>Array.&lt;account_name&gt;</code> | 

