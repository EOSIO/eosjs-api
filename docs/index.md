## Functions

<dl>
<dt><a href="#createTransaction">createTransaction(expireInSeconds, callback)</a></dt>
<dd><p>Consult the blockchain and gather information for use in a new signed transaction.
  For Transaction as Proof of Stake (TaPOS), 32 bits of a recent block Id is included.
  Because all transactions use TaPOS, this solves the nothing at stake attack.</p>
<p>  This is usually called for every transaction or maybe cached per block.  Although
  longer caching is possible, a longer cache time increases the risk of a
  transaction replay attack.</p>
</dd>
<dt><a href="#processArgs">processArgs(args, defParams, methodName, [optionsFormatter(extraParam)])</a> ⇒ <code><a href="#processedArgs">processedArgs</a></code></dt>
<dd><p>Convert args array or object into a normalized value object.  Suppoorts extra
  options and(or) callback parameters.</p>
<p>  Per the Promise API feature promisifyAll (see also sb-promisify), the callback
  (if provided) must always be last.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#headers">headers</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#processedArgs">processedArgs</a> : <code>object</code></dt>
<dd><p>Normalized object containing arguments, and
  a chained promise and a callback.</p>
</dd>
</dl>

<a name="createTransaction"></a>

## createTransaction(expireInSeconds, callback)
Consult the blockchain and gather information for use in a new signed transaction.
  For Transaction as Proof of Stake (TaPOS), 32 bits of a recent block Id is included.
  Because all transactions use TaPOS, this solves the nothing at stake attack.

  This is usually called for every transaction or maybe cached per block.  Although
  longer caching is possible, a longer cache time increases the risk of a
  transaction replay attack.

**Kind**: global function  
**See**: {headers}  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| expireInSeconds | <code>number</code> | <code>60</code> | How many seconds until expiration |
| callback | <code>function</code> |  | [headers](#headers) |

**Example**  
```js
eos.createTransaction(60, (error, headers) => {})
```
<a name="processArgs"></a>

## processArgs(args, defParams, methodName, [optionsFormatter(extraParam)]) ⇒ [<code>processedArgs</code>](#processedArgs)
Convert args array or object into a normalized value object.  Suppoorts extra
  options and(or) callback parameters.

  Per the Promise API feature promisifyAll (see also sb-promisify), the callback
  (if provided) must always be last.

**Kind**: global function  
**Returns**: [<code>processedArgs</code>](#processedArgs) - processedArgs  
**Throws**:

- TypeError - when parameter count is not exact (after adjusting for
  options and callback)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| args | <code>Array</code> \| <code>object</code> |  | User-provided parameter object or array of parameters |
| defParams | <code>Array</code> |  | Names for the parameters. |
| methodName | <code>string</code> | <code>&quot;method&quot;</code> | for error reporting |
| [optionsFormatter(extraParam)] | <code>function</code> | <code></code> | optional callback used if an     extra optional (non-callback) parameter is provided. |

**Example**  
```js
api.processArgs(args, ['account'], 'contract', optionsFormatter)
```
<a name="headers"></a>

## headers : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ref_block_num | <code>number</code> | Last irreversible block number.  The   bit-wise AND operation is used to keep this value with the size of a Uint16   size (a block num in the last 2^16 blocks).  Example:   `get_info.last_irreversible_block_num & 0xFFFF` |
| ref_block_prefix | <code>number</code> | get_block.ref_block_prefix .. This is   a 32 bit number identifier (identify the same block referenced in `ref_block_num`). |
| expiration | <code>string</code> | This is based on the head block time from the   blockchain.  Be careful to suffix a Z if required (as with Firefox and JavaScript)   to ensure this date string is interpreted as Zulu time.   Example: `new Date(new Date(info.head_block_time + 'Z').getTime() + expireInSeconds * 1000).toISOString().split('.')[0]` |

<a name="processedArgs"></a>

## processedArgs : <code>object</code>
Normalized object containing arguments, and
  a chained promise and a callback.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | normalized args only, parameters by name, no extra options or callback. |
| options | <code>object</code> | non-null or non-undefined return value from invocation of   optionsFormatter(optionsParam). |
| callback | <code>function</code> | chained to optional callback provided in args.  Resolves   or rejects returnPromise. |
| returnPromise | <code>Promise</code> | promise is returned when no callback is provided in   args[args.length - 1].  Undefined when a callback is provided. |

