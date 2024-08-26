# Class: FlattenedEncrypt

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

---

The FlattenedEncrypt class is used to build and encrypt Flattened JWE objects.

This class is exported (as a named export) from the main `'jose'` module entry point as well as
from its subpath export `'jose/jwe/flattened/encrypt'`.

**`Example`**

```js
const jwe = await new jose.FlattenedEncrypt(
  new TextEncoder().encode('It’s a dangerous business, Frodo, going out your door.'),
)
  .setProtectedHeader({ alg: 'RSA-OAEP-256', enc: 'A256GCM' })
  .setAdditionalAuthenticatedData(encoder.encode('The Fellowship of the Ring'))
  .encrypt(publicKey)

console.log(jwe)
```

## Table of contents

### Constructors

- [constructor](jwe_flattened_encrypt.FlattenedEncrypt.md#constructor)

### Methods

- [encrypt](jwe_flattened_encrypt.FlattenedEncrypt.md#encrypt)
- [setAdditionalAuthenticatedData](jwe_flattened_encrypt.FlattenedEncrypt.md#setadditionalauthenticateddata)
- [setContentEncryptionKey](jwe_flattened_encrypt.FlattenedEncrypt.md#setcontentencryptionkey)
- [setInitializationVector](jwe_flattened_encrypt.FlattenedEncrypt.md#setinitializationvector)
- [setKeyManagementParameters](jwe_flattened_encrypt.FlattenedEncrypt.md#setkeymanagementparameters)
- [setProtectedHeader](jwe_flattened_encrypt.FlattenedEncrypt.md#setprotectedheader)
- [setSharedUnprotectedHeader](jwe_flattened_encrypt.FlattenedEncrypt.md#setsharedunprotectedheader)
- [setUnprotectedHeader](jwe_flattened_encrypt.FlattenedEncrypt.md#setunprotectedheader)

## Constructors

### constructor

• **new FlattenedEncrypt**(`plaintext`): [`FlattenedEncrypt`](jwe_flattened_encrypt.FlattenedEncrypt.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plaintext` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | Binary representation of the plaintext to encrypt. |

#### Returns

[`FlattenedEncrypt`](jwe_flattened_encrypt.FlattenedEncrypt.md)

## Methods

### encrypt

▸ **encrypt**(`key`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FlattenedJWE`](../interfaces/types.FlattenedJWE.md)\>

Encrypts and resolves the value of the Flattened JWE object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) \| [`KeyLike`](../types/types.KeyLike.md) | Public Key or Secret to encrypt the JWE with. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210#jwe-alg). |
| `options?` | [`EncryptOptions`](../interfaces/types.EncryptOptions.md) | JWE Encryption options. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FlattenedJWE`](../interfaces/types.FlattenedJWE.md)\>

___

### setAdditionalAuthenticatedData

▸ **setAdditionalAuthenticatedData**(`aad`): `this`

Sets the Additional Authenticated Data on the FlattenedEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aad` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | Additional Authenticated Data. |

#### Returns

`this`

___

### setContentEncryptionKey

▸ **setContentEncryptionKey**(`cek`): `this`

Sets a content encryption key to use, by default a random suitable one is generated for the JWE
enc" (Encryption Algorithm) Header Parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cek` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | JWE Content Encryption Key. |

#### Returns

`this`

**`Deprecated`**

You should not use this method. It is only really intended for test and vector
  validation purposes.

___

### setInitializationVector

▸ **setInitializationVector**(`iv`): `this`

Sets the JWE Initialization Vector to use for content encryption, by default a random suitable
one is generated for the JWE enc" (Encryption Algorithm) Header Parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iv` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | JWE Initialization Vector. |

#### Returns

`this`

**`Deprecated`**

You should not use this method. It is only really intended for test and vector
  validation purposes.

___

### setKeyManagementParameters

▸ **setKeyManagementParameters**(`parameters`): `this`

Sets the JWE Key Management parameters to be used when encrypting. Use of this is method is
really only needed for ECDH based algorithms when utilizing the Agreement PartyUInfo or
Agreement PartyVInfo parameters. Other parameters will always be randomly generated when needed
and missing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`JWEKeyManagementHeaderParameters`](../interfaces/types.JWEKeyManagementHeaderParameters.md) | JWE Key Management parameters. |

#### Returns

`this`

___

### setProtectedHeader

▸ **setProtectedHeader**(`protectedHeader`): `this`

Sets the JWE Protected Header on the FlattenedEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `protectedHeader` | [`JWEHeaderParameters`](../interfaces/types.JWEHeaderParameters.md) | JWE Protected Header. |

#### Returns

`this`

___

### setSharedUnprotectedHeader

▸ **setSharedUnprotectedHeader**(`sharedUnprotectedHeader`): `this`

Sets the JWE Shared Unprotected Header on the FlattenedEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sharedUnprotectedHeader` | [`JWEHeaderParameters`](../interfaces/types.JWEHeaderParameters.md) | JWE Shared Unprotected Header. |

#### Returns

`this`

___

### setUnprotectedHeader

▸ **setUnprotectedHeader**(`unprotectedHeader`): `this`

Sets the JWE Per-Recipient Unprotected Header on the FlattenedEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unprotectedHeader` | [`JWEHeaderParameters`](../interfaces/types.JWEHeaderParameters.md) | JWE Per-Recipient Unprotected Header. |

#### Returns

`this`
