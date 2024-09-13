# Interface: JWK\_RSA\_Private

## [💗 Help the project](https://github.com/sponsors/panva)

Support from the community to continue maintaining and improving this module is welcome. If you find the module useful, please consider supporting the project by [becoming a sponsor](https://github.com/sponsors/panva).

---

Convenience interface for Private RSA JSON Web Keys

## Table of contents

### Properties

- [d](types.JWK_RSA_Private.md#d)
- [dp](types.JWK_RSA_Private.md#dp)
- [dq](types.JWK_RSA_Private.md#dq)
- [e](types.JWK_RSA_Private.md#e)
- [kty](types.JWK_RSA_Private.md#kty)
- [n](types.JWK_RSA_Private.md#n)
- [p](types.JWK_RSA_Private.md#p)
- [q](types.JWK_RSA_Private.md#q)
- [qi](types.JWK_RSA_Private.md#qi)
- [alg](types.JWK_RSA_Private.md#alg)
- [ext](types.JWK_RSA_Private.md#ext)
- [key\_ops](types.JWK_RSA_Private.md#key_ops)
- [kid](types.JWK_RSA_Private.md#kid)
- [oth](types.JWK_RSA_Private.md#oth)
- [use](types.JWK_RSA_Private.md#use)
- [x5c](types.JWK_RSA_Private.md#x5c)
- [x5t](types.JWK_RSA_Private.md#x5t)
- [x5t#S256](types.JWK_RSA_Private.md#x5t#s256)
- [x5u](types.JWK_RSA_Private.md#x5u)

## Properties

### d

• **d**: `string`

Private Exponent

___

### dp

• **dp**: `string`

First Factor CRT Exponent

___

### dq

• **dq**: `string`

Second Factor CRT Exponent

___

### e

• **e**: `string`

Exponent

___

### kty

• **kty**: `string`

JWK "kty" (Key Type) Parameter.

___

### n

• **n**: `string`

Modulus

___

### p

• **p**: `string`

First Prime Factor

___

### q

• **q**: `string`

Second Prime Factor

___

### qi

• **qi**: `string`

First CRT Coefficient

___

### alg

• `Optional` **alg**: `string`

JWK "alg" (Algorithm) Parameter.

___

### ext

• `Optional` **ext**: `boolean`

JWK "ext" (Extractable) Parameter.

___

### key\_ops

• `Optional` **key\_ops**: `string`[]

JWK "key_ops" (Key Operations) Parameter.

___

### kid

• `Optional` **kid**: `string`

JWK "kid" (Key ID) Parameter.

___

### oth

• `Optional` **oth**: \{ `d?`: `string` ; `r?`: `string` ; `t?`: `string`  }[]

Other Primes Info. This parameter is not supported.

___

### use

• `Optional` **use**: `string`

JWK "use" (Public Key Use) Parameter.

___

### x5c

• `Optional` **x5c**: `string`[]

JWK "x5c" (X.509 Certificate Chain) Parameter.

___

### x5t

• `Optional` **x5t**: `string`

JWK "x5t" (X.509 Certificate SHA-1 Thumbprint) Parameter.

___

### x5t#S256

• `Optional` **x5t#S256**: `string`

"x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Parameter.

___

### x5u

• `Optional` **x5u**: `string`

JWK "x5u" (X.509 URL) Parameter.
