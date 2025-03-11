/**
 * JOSE module errors and error codes
 *
 * @module
 */

import type * as types from '../types.d.ts'

/**
 * A generic Error that all other JOSE specific Error subclasses extend.
 *
 */
export class JOSEError extends Error {
  /**
   * A unique error code for the particular error subclass.
   *
   * @ignore
   */
  static code = 'ERR_JOSE_GENERIC'

  /** A unique error code for {@link JOSEError}. */
  code = 'ERR_JOSE_GENERIC'

  /** @ignore */
  constructor(message?: string, options?: { cause?: unknown }) {
    super(message, options)
    this.name = this.constructor.name
    // @ts-ignore
    Error.captureStackTrace?.(this, this.constructor)
  }
}

/**
 * An error subclass thrown when a JWT Claim Set member validation fails.
 *
 */
export class JWTClaimValidationFailed extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWT_CLAIM_VALIDATION_FAILED'

  /** A unique error code for {@link JWTClaimValidationFailed}. */
  override code = 'ERR_JWT_CLAIM_VALIDATION_FAILED'

  /** The Claim for which the validation failed. */
  claim: string

  /** Reason code for the validation failure. */
  reason: string

  /**
   * The parsed JWT Claims Set (aka payload). Other JWT claims may or may not have been verified at
   * this point. The JSON Web Signature (JWS) or a JSON Web Encryption (JWE) structures' integrity
   * has however been verified. Claims Set verification happens after the JWS Signature or JWE
   * Decryption processes.
   */
  payload: types.JWTPayload

  /** @ignore */
  constructor(
    message: string,
    payload: types.JWTPayload,
    claim = 'unspecified',
    reason = 'unspecified',
  ) {
    super(message, { cause: { claim, reason, payload } })
    this.claim = claim
    this.reason = reason
    this.payload = payload
  }
}

/**
 * An error subclass thrown when a JWT is expired.
 *
 */
export class JWTExpired extends JOSEError implements JWTClaimValidationFailed {
  /** @ignore */
  static override code = 'ERR_JWT_EXPIRED'

  /** A unique error code for {@link JWTExpired}. */
  override code = 'ERR_JWT_EXPIRED'

  /** The Claim for which the validation failed. */
  claim: string

  /** Reason code for the validation failure. */
  reason: string

  /**
   * The parsed JWT Claims Set (aka payload). Other JWT claims may or may not have been verified at
   * this point. The JSON Web Signature (JWS) or a JSON Web Encryption (JWE) structures' integrity
   * has however been verified. Claims Set verification happens after the JWS Signature or JWE
   * Decryption processes.
   */
  payload: types.JWTPayload

  /** @ignore */
  constructor(
    message: string,
    payload: types.JWTPayload,
    claim = 'unspecified',
    reason = 'unspecified',
  ) {
    super(message, { cause: { claim, reason, payload } })
    this.claim = claim
    this.reason = reason
    this.payload = payload
  }
}

/**
 * An error subclass thrown when a JOSE Algorithm is not allowed per developer preference.
 *
 */
export class JOSEAlgNotAllowed extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JOSE_ALG_NOT_ALLOWED'

  /** A unique error code for {@link JOSEAlgNotAllowed}. */
  override code = 'ERR_JOSE_ALG_NOT_ALLOWED'
}

/**
 * An error subclass thrown when a particular feature or algorithm is not supported by this
 * implementation or JOSE in general.
 *
 */
export class JOSENotSupported extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JOSE_NOT_SUPPORTED'

  /** A unique error code for {@link JOSENotSupported}. */
  override code = 'ERR_JOSE_NOT_SUPPORTED'
}

/**
 * An error subclass thrown when a JWE ciphertext decryption fails.
 *
 */
export class JWEDecryptionFailed extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWE_DECRYPTION_FAILED'

  /** A unique error code for {@link JWEDecryptionFailed}. */
  override code = 'ERR_JWE_DECRYPTION_FAILED'

  /** @ignore */
  constructor(message = 'decryption operation failed', options?: { cause?: unknown }) {
    super(message, options)
  }
}

/**
 * An error subclass thrown when a JWE is invalid.
 *
 */
export class JWEInvalid extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWE_INVALID'

  /** A unique error code for {@link JWEInvalid}. */
  override code = 'ERR_JWE_INVALID'
}

/**
 * An error subclass thrown when a JWS is invalid.
 *
 */
export class JWSInvalid extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWS_INVALID'

  /** A unique error code for {@link JWSInvalid}. */
  override code = 'ERR_JWS_INVALID'
}

/**
 * An error subclass thrown when a JWT is invalid.
 *
 */
export class JWTInvalid extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWT_INVALID'

  /** A unique error code for {@link JWTInvalid}. */
  override code = 'ERR_JWT_INVALID'
}

/**
 * An error subclass thrown when a JWK is invalid.
 *
 */
export class JWKInvalid extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWK_INVALID'

  /** A unique error code for {@link JWKInvalid}. */
  override code = 'ERR_JWK_INVALID'
}

/**
 * An error subclass thrown when a JWKS is invalid.
 *
 */
export class JWKSInvalid extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWKS_INVALID'

  /** A unique error code for {@link JWKSInvalid}. */
  override code = 'ERR_JWKS_INVALID'
}

/**
 * An error subclass thrown when no keys match from a JWKS.
 *
 */
export class JWKSNoMatchingKey extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWKS_NO_MATCHING_KEY'

  /** A unique error code for {@link JWKSNoMatchingKey}. */
  override code = 'ERR_JWKS_NO_MATCHING_KEY'

  /** @ignore */
  constructor(
    message = 'no applicable key found in the JSON Web Key Set',
    options?: { cause?: unknown },
  ) {
    super(message, options)
  }
}

/**
 * An error subclass thrown when multiple keys match from a JWKS.
 *
 */
export class JWKSMultipleMatchingKeys extends JOSEError {
  /** @ignore */
  [Symbol.asyncIterator]!: () => AsyncIterableIterator<types.CryptoKey>

  /** @ignore */
  static override code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS'

  /** A unique error code for {@link JWKSMultipleMatchingKeys}. */
  override code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS'

  /** @ignore */
  constructor(
    message = 'multiple matching keys found in the JSON Web Key Set',
    options?: { cause?: unknown },
  ) {
    super(message, options)
  }
}

/**
 * Timeout was reached when retrieving the JWKS response.
 *
 */
export class JWKSTimeout extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWKS_TIMEOUT'

  /** A unique error code for {@link JWKSTimeout}. */
  override code = 'ERR_JWKS_TIMEOUT'

  /** @ignore */
  constructor(message = 'request timed out', options?: { cause?: unknown }) {
    super(message, options)
  }
}

/**
 * An error subclass thrown when JWS signature verification fails.
 *
 */
export class JWSSignatureVerificationFailed extends JOSEError {
  /** @ignore */
  static override code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED'

  /** A unique error code for {@link JWSSignatureVerificationFailed}. */
  override code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED'

  /** @ignore */
  constructor(message = 'signature verification failed', options?: { cause?: unknown }) {
    super(message, options)
  }
}
