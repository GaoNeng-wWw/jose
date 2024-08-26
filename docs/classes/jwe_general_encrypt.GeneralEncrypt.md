# Class: GeneralEncrypt

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

---

The GeneralEncrypt class is used to build and encrypt General JWE objects.

This class is exported (as a named export) from the main `'jose'` module entry point as well as
from its subpath export `'jose/jwe/general/encrypt'`.

**`Example`**

```js
const jwe = await new jose.GeneralEncrypt(
  new TextEncoder().encode('It’s a dangerous business, Frodo, going out your door.'),
)
  .setProtectedHeader({ enc: 'A256GCM' })
  .addRecipient(ecPublicKey)
  .setUnprotectedHeader({ alg: 'ECDH-ES+A256KW' })
  .addRecipient(rsaPublicKey)
  .setUnprotectedHeader({ alg: 'RSA-OAEP-384' })
  .encrypt()

console.log(jwe)
```

## Table of contents

### Constructors

- [constructor](jwe_general_encrypt.GeneralEncrypt.md#constructor)

### Methods

- [addRecipient](jwe_general_encrypt.GeneralEncrypt.md#addrecipient)
- [encrypt](jwe_general_encrypt.GeneralEncrypt.md#encrypt)
- [setAdditionalAuthenticatedData](jwe_general_encrypt.GeneralEncrypt.md#setadditionalauthenticateddata)
- [setProtectedHeader](jwe_general_encrypt.GeneralEncrypt.md#setprotectedheader)
- [setSharedUnprotectedHeader](jwe_general_encrypt.GeneralEncrypt.md#setsharedunprotectedheader)

## Constructors

### constructor

• **new GeneralEncrypt**(`plaintext`): [`GeneralEncrypt`](jwe_general_encrypt.GeneralEncrypt.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plaintext` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | Binary representation of the plaintext to encrypt. |

#### Returns

[`GeneralEncrypt`](jwe_general_encrypt.GeneralEncrypt.md)

## Methods

### addRecipient

▸ **addRecipient**(`key`, `options?`): [`Recipient`](../interfaces/jwe_general_encrypt.Recipient.md)

Adds an additional recipient for the General JWE object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) \| [`KeyLike`](../types/types.KeyLike.md) | Public Key or Secret to encrypt the Content Encryption Key for the recipient with. See [Algorithm Key Requirements](https://github.com/panva/jose/issues/210#jwe-alg). |
| `options?` | [`CritOption`](../interfaces/types.CritOption.md) | JWE Encryption options. |

#### Returns

[`Recipient`](../interfaces/jwe_general_encrypt.Recipient.md)

___

### encrypt

▸ **encrypt**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`GeneralJWE`](../interfaces/types.GeneralJWE.md)\>

Encrypts and resolves the value of the General JWE object.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`GeneralJWE`](../interfaces/types.GeneralJWE.md)\>

___

### setAdditionalAuthenticatedData

▸ **setAdditionalAuthenticatedData**(`aad`): `this`

Sets the Additional Authenticated Data on the GeneralEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aad` | [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | Additional Authenticated Data. |

#### Returns

`this`

___

### setProtectedHeader

▸ **setProtectedHeader**(`protectedHeader`): `this`

Sets the JWE Protected Header on the GeneralEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `protectedHeader` | [`JWEHeaderParameters`](../interfaces/types.JWEHeaderParameters.md) | JWE Protected Header object. |

#### Returns

`this`

___

### setSharedUnprotectedHeader

▸ **setSharedUnprotectedHeader**(`sharedUnprotectedHeader`): `this`

Sets the JWE Shared Unprotected Header on the GeneralEncrypt object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sharedUnprotectedHeader` | [`JWEHeaderParameters`](../interfaces/types.JWEHeaderParameters.md) | JWE Shared Unprotected Header object. |

#### Returns

`this`
