import type { RsaEsDecryptFunction, RsaEsEncryptFunction } from './interfaces.d.ts'
import subtleAlgorithm from './subtle_rsaes.js'
import crypto, { isCryptoKey } from './webcrypto.js'
import { checkEncCryptoKey } from '../lib/crypto_key.js'
import checkKeyLength from './check_key_length.js'
import invalidKeyInput from '../lib/invalid_key_input.js'
import { types } from './is_key_like.js'

export const encrypt: RsaEsEncryptFunction = async (alg: string, key: unknown, cek: Uint8Array) => {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalidKeyInput(key, ...types))
  }
  checkEncCryptoKey(key, alg, 'encrypt', 'wrapKey')
  checkKeyLength(alg, key)

  if (key.usages.includes('encrypt')) {
    return new Uint8Array(await crypto.subtle.encrypt(subtleAlgorithm(alg), key, cek))
  }

  if (key.usages.includes('wrapKey')) {
    // algorithm used is irrelevant
    const cryptoKeyCek = await crypto.subtle.importKey(
      'raw',
      cek,
      { hash: 'SHA-256', name: 'HMAC' },
      true,
      ['sign'],
    )
    return new Uint8Array(
      await crypto.subtle.wrapKey('raw', cryptoKeyCek, key, subtleAlgorithm(alg)),
    )
  }

  throw new TypeError(
    'RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation',
  )
}

export const decrypt: RsaEsDecryptFunction = async (
  alg: string,
  key: unknown,
  encryptedKey: Uint8Array,
) => {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalidKeyInput(key, ...types))
  }
  checkEncCryptoKey(key, alg, 'decrypt', 'unwrapKey')
  checkKeyLength(alg, key)

  if (key.usages.includes('decrypt')) {
    return new Uint8Array(await crypto.subtle.decrypt(subtleAlgorithm(alg), key, encryptedKey))
  }

  if (key.usages.includes('unwrapKey')) {
    // algorithm used is irrelevant
    const cryptoKeyCek = await crypto.subtle.unwrapKey(
      'raw',
      encryptedKey,
      key,
      subtleAlgorithm(alg),
      { hash: 'SHA-256', name: 'HMAC' },
      true,
      ['sign'],
    )

    return new Uint8Array(await crypto.subtle.exportKey('raw', cryptoKeyCek))
  }

  throw new TypeError(
    'RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation',
  )
}
