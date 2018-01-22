module.exports = {

  // Under "api:" all functions must take api as their 1st parameter
  api: {
    createTransaction
  }
}

/**
  @typedef {object} headers
  @property {number} ref_block_num - Recent head block number (ideally last
  irreversible block).  The bit-wise AND operation is used to keep this value
  with the size of a Uint16 size.
  Example:`(get_info.head_block_num - 3) & 0xFFFF`

  @property {string} ref_block_prefix - get_block.ref_block_prefix .. This is
  the same block referenced in `ref_block_num`.

  @property {string} expiration - This is based on the head block time from the
  blockchain.  Be careful to suffix a Z if required (as with Firefox and JavaScript)
  to ensure this date string is interpreted as Zulu time.

  Example: `new Date(info.head_block_time + 'Z').getTime() + expireInSeconds * 1000`
*/

/**
  Consult the blockchain and gather information for use in a new signed transaction.
  For Transaction as Proof of Stake (TaPOS), 32 bits of a recent block Id is included.
  Because all transactions use TaPOS, this solves the nothing at stake attack.

  This is usually called for every transaction or maybe cached per block.  Although
  longer caching may be possible, a longer cache time increases the risk of a
  transaction replay attack.

  @arg {number} expireInSeconds - How many seconds until expiration
  @arg {function(error, headers)} callback {@link headers}
  @see {headers}
  @example testnet.createTransaction(60, (error, headers) => {})
*/
function createTransaction(api, expireInSeconds = 60, callback) {
  if(!callback) {
    throw new TypeError('callback parameter is required')
  }
  api.getInfo(checkError(callback, info => {
    const chainDate = new Date(info.head_block_time + 'Z')

    // Back-up 3 blocks to help avoid mini-forks.
    const ref_block_num = (info.head_block_num - 3) & 0xFFFF

    api.getBlock(info.head_block_num - 3, checkError(callback, block => {
      const expiration = new Date(chainDate.getTime() + expireInSeconds * 1000)
      const headers = {
        ref_block_num,
        ref_block_prefix: block.refBlockPrefix || block.ref_block_prefix,
        expiration: expiration.toISOString().split('.')[0],
        scope: [],
        read_scope: [],
        messages: [],
        signatures: [],
      }
      callback(null, headers)
    }))
  }))
}

const checkError = (parentErr, parrentRes) => (error, result) => {
  if (error) {
    parentErr(error)
  } else {
    parrentRes(result)
  }
}
