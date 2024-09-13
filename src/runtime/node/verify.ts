import * as crypto from 'node:crypto'
import type { VerifyJsonWebKeyInput, VerifyKeyObjectInput } from 'node:crypto'
import { promisify } from 'node:util'

import type { VerifyFunction } from '../interfaces.d'
import nodeDigest from './dsa_digest.js'
import nodeKey from './node_key.js'
import sign from './sign.js'
import getVerifyKey from './get_sign_verify_key.js'

const oneShotVerify = promisify(crypto.verify)

const verify: VerifyFunction = async (alg, key: unknown, signature, data) => {
  const k = getVerifyKey(alg, key, 'verify')

  if (alg.startsWith('HS')) {
    const expected = await sign(alg, k, data)
    const actual = signature
    try {
      return crypto.timingSafeEqual(actual, expected)
    } catch {
      // handle incorrect signature lengths
      return false
    }
  }

  const algorithm = nodeDigest(alg)
  const keyInput = nodeKey<VerifyKeyObjectInput, VerifyJsonWebKeyInput>(alg, k)
  try {
    return await oneShotVerify(algorithm, data, keyInput, signature)
  } catch {
    return false
  }
}

export default verify
