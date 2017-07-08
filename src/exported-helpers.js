module.exports = {
  api: {
    // All functions must take api as their 1st parameter
    createTransaction
  }
}

/**
  Consult the blockchain and gather information for use in a new signed transaction headers.
  Per Transaction as Proof of Stake (TaPOS) 32 bits of a recent block Id is included.

  @arg {number} expireInSeconds - How many seconds until expiration
  @arg {function} callback - (error, headers)
  @typedef {object} headers - {ref_block_num, ref_block_prefix, expiration}
*/
function createTransaction(api, expireInSeconds = 60, callback) {
  if(!callback) {
    throw new TypeError('callback parameter is required')
  }
  api.getInfo(checkError(callback, info => {
    const chainDate = new Date(info.head_block_time + 'Z')
    const refBlockNum = (info.head_block_number - 3) & 0xFFFF
    console.log('refBlockNum', refBlockNum)
    // Back-up 3 blocks to help avoid mini-forks.  The getBlock call does not return
    // its own block id but the next block has 'previous'.
    api.getBlock(info.head_block_num - 2, checkError(callback, block => {
      const headBlockId = block.previous
      const expiration = new Date(chainDate.getTime() + expireInSeconds * 1000)
      const headers = Object.assign({
        refBlockNum,
        refBlockPrefix: new Buffer(headBlockId, 'hex').readUInt32LE(4),
        expiration: expiration.toISOString().split('.')[0],
        scope: [],
        messages: [],
        signatures: [],
        authorizations: [],
      })
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
