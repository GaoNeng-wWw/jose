# Function: generateKeyPair

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

---

▸ **generateKeyPair**\<`KeyLikeType`\>(`alg`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`GenerateKeyPairResult`](../interfaces/key_generate_key_pair.GenerateKeyPairResult.md)\<`KeyLikeType`\>\>

Generates a private and a public key for a given JWA algorithm identifier. This can only generate
asymmetric key pairs. For symmetric secrets use the `generateSecret` function.

Note: Under Web Crypto API runtime the `privateKey` is generated with `extractable` set to
`false` by default. See [GenerateKeyPairOptions.extractable](../interfaces/key_generate_key_pair.GenerateKeyPairOptions.md#extractable) to generate an extractable
`privateKey`.

This function is exported (as a named export) from the main `'jose'` module entry point as well
as from its subpath export `'jose/generate/keypair'`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `KeyLikeType` | extends [`KeyLike`](../types/types.KeyLike.md) = [`KeyLike`](../types/types.KeyLike.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alg` | `string` | JWA Algorithm Identifier to be used with the generated key pair. |
| `options?` | [`GenerateKeyPairOptions`](../interfaces/key_generate_key_pair.GenerateKeyPairOptions.md) | Additional options passed down to the key pair generation. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`GenerateKeyPairResult`](../interfaces/key_generate_key_pair.GenerateKeyPairResult.md)\<`KeyLikeType`\>\>

**`Example`**

```js
const { publicKey, privateKey } = await jose.generateKeyPair('PS256')
console.log(publicKey)
console.log(privateKey)
```
